import React, { useState, useEffect } from 'react'

const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'es-US',
  JP = 'ja-JP',
}

const getLocalFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return  Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocalFromString(savedLocale))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span>現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select value={locale}
                onChange={(e) => setLocale(getLocalFromString(e.target.value))}>
          <option value="en-US">英語</option>
          <option value="ja-JP">日本語</option>
        </select>
      </p>
    </div>
  )
}