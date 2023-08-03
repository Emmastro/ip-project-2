import React from 'react'

const BlogContent = ({ blog }) => {
  // Check if the blog exists and has content.
  if (!blog || !blog.content) {
    return null
  }

  // Get the content from the blog.
  const content = blog.content

  // Split the content into lines by splitting at newline characters
  const lines = content.split(/\r?\n/)

  // regular expression pattern to find lines containing colons
  const colonRegex = /.*:/

  // Iterate through each line and check if it contains a colon
  // If it does, apply the bold formatting to the entire line
  const formattedLines = lines.map((line, index) => {
    if (colonRegex.test(line)) {
      return (
        <React.Fragment key={index}>
          <br /><span style={{ fontWeight: 'bold' }}>{line}</span><br />
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={index}>
        {line}<br />
      </React.Fragment>
    )
  })

  return (
    <p className='text-base tracking-wide leading-loose'>
      {formattedLines}
    </p>
  )
}

export default BlogContent
