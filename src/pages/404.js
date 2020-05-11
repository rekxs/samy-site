import React from "react"
import {useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Import Components
import Header from '../components/header'

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "404.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return (
    <div class="notFound">
      <Header />
      <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="content-wrap">
                <h1 class="title is-2">404</h1>
                <figure class="image">
                    <Img fluid={data.image.childImageSharp.fluid} />
                </figure>
                <h2 class="title is-4">Sorry! This is not the Page you were looking for</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
 }

export default NotFoundPage
