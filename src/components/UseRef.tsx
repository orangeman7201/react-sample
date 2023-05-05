import React, { useState, useRef } from 'react'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 500

const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click()
    }
  }

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      fileRef.current = files[0]
      setMessage(`Selected: ${fileRef.current.name}`)
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      await sleep(UPLOAD_DELAY)
      setMessage(`${fileRef.current?.name} のアップロードに成功しました。`)
    }
  }

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input type="file"
             ref={inputImageRef}
             accept='image/*'
             onChange={onChangeImage}
             style={{ visibility: 'hidden' }} />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}

export default ImageUploader
