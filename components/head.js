import NextHead from 'next/head'
import React from 'react'

export default (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
    />
    <link rel="stylesheet" href="../static/instantsearch.css" />
  </NextHead>
)

