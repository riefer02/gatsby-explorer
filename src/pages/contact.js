import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Tracker from "../components/tracker"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
      <Tracker />
    </Layout>
  )
}
