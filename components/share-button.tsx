"use client"

import { useState } from "react"
import { Share2, X, Facebook, Twitter, Linkedin, Mail, Link } from "lucide-react"

export function ShareButton({ post }: { post: any }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleShare = () => {
    setShowPopup(true)
  }

  const shareToFacebook = () => {
    const url = window.location.href
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(post.title)}`
    window.open(fbUrl, '_blank', 'width=600,height=400')
    setShowPopup(false)
  }

  const shareToTwitter = () => {
    const url = window.location.href
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
    setShowPopup(false)
  }

  const shareToLinkedIn = () => {
    const url = window.location.href
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=400')
    setShowPopup(false)
  }

  const shareToEmail = () => {
    const url = window.location.href
    const emailUrl = `mailto:?subject=${encodeURIComponent(`Check out this article: ${post.title}`)}&body=${encodeURIComponent(`I thought you might be interested in this article: ${post.title}\n\n${url}`)}`
    window.location.href = emailUrl
    setShowPopup(false)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  return (
    <>
      <button
        onClick={handleShare}
        className="text-gray-600 hover:text-blue-600 bg-transparent border-0 cursor-pointer inline-flex items-center gap-2 text-sm transition-colors"
      >
        <Share2 size={18} />
        Share
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Share this article</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={shareToFacebook}
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </button>

              <button
                onClick={shareToTwitter}
                className="flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg transition-colors"
              >
                <Twitter size={20} />
                <span>Twitter</span>
              </button>

              <button
                onClick={shareToLinkedIn}
                className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </button>

              <button
                onClick={shareToEmail}
                className="flex items-center justify-center gap-3 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </button>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">Or copy the link</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={typeof window !== 'undefined' ? window.location.href : ''}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={copyLink}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Link size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}