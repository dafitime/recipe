import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article classname="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Austin squid mumblecore street art, four dollar toast food truck
              prism paleo venmo shoreditch chillwave green juice. Selfies paleo
              vexillologist vegan letterpress austin iceland. Edison bulb
              affogato artisan, disrupt austin hammock shabby chic pabst
              crucifix normcore health goth. Yr art party vape prism helvetica
              live-edge.
            </p>
            <p>
              Farm-to-table wayfarers authentic intelligentsia disrupt. Jean
              shorts snackwave raclette, banjo asymmetrical thundercats af.
            </p>
            <p>
              Yuccie chillwave tattooed ramps, master cleanse affogato locavore
              hot chicken pug tousled next level shabby chic cred fingerstache.
              Prism tacos pabst flexitarian gentrify craft beer. +1 plaid woke
              pinterest migas banjo pug humblebrag crucifix microdosing
              activated charcoal.
            </p>
          </article>

          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlForm="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlForm="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlForm="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
      <h1>Contact Page</h1>
    </Layout>
  )
}

export default Contact
