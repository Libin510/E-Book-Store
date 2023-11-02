import React from 'react'
import './home.css'
function Home() {
  return (
    <section>
        <div className="head">
            <h1>Welcome to E-Book Store</h1>
            <p>At E-Book Store, we bring you an extensive collection of eBooks that cater to your reading preferences. Dive into the world of literature with our wide range of books, spanning various genres and authors. Whether you're a passionate reader, a student, or someone looking for information, our eBook store has something for everyone.</p>
        </div>
      
        <div className="content">
        <h3>Why Choose E-Book Store?</h3>
            <ul>
                <li>Vast eBook Collection: Our store boasts a diverse selection of eBooks, from classic literature to the latest bestsellers, and even niche titles you won't find elsewhere.</li>
                <li>User-Friendly Experience: We've designed our website with simplicity in mind. User and admin interfaces are intuitive and easy to navigate.</li>
                <li>Secure Transactions: Your online safety is our priority. We offer secure payment options for all your eBook purchases. </li>
                <li>Admin Features: For eBook publishers and authors, our platform provides a seamless way to add, manage, and promote your eBooks. Register as an admin to get started.</li>
                <li>User Features: As a user, you can browse, search, and purchase eBooks easily. You can also create your reading list by adding books to your cart.</li>
                
            </ul>
        </div>
        <div className="maincontent">
            <h4>How it Works:</h4>
            <ol>
                <li>User Registration: If you're a reader, simply sign up as a user. Provide your details, and you'll have access to the world of eBooks.</li>
                <li>Admin Registration: If you're an eBook publisher or author, register as an admin. You can add books to our collection and manage your publications.</li>
                <li>Browse and Discover: Browse our eBook catalog by genre, author, or title. Use our search feature to find exactly what you're looking for.</li>
                <li>Add to Cart: For users, add books to your cart with a simple click. Keep track of your selections as you explore our library.</li>
                <li>Secure Purchase: Proceed to checkout for a secure and straightforward purchasing process.</li>
                <li>Start Reading: Once you've made your purchase, your eBooks will be available for immediate download or reading within our reader application.</li>
                <li>Admin Control: Admins can view, manage, and promote eBooks on their dashboard, ensuring their content reaches the right audience.</li>
            </ol>
        </div>
        <div className="support">
            <h3>Customer Support:</h3>
            <p>We're here to assist you on your journey. If you have any questions, concerns, or need assistance, our dedicated customer support team is available to help. Feel free to contact us via <a href="mailto:estore@gmail.com">estore@gmail.com</a> or our support hotline at 8088012882.</p>
        </div>
        <div className="end">
            <h5>Join E-Book Store Today</h5>
            <p>Start your eBook adventure with us today! Whether you're an admin looking to share your literary works or a reader in search of your next favorite book, E-Book Store is your destination for all things eBooks. Sign up, browse our collection, and let the reading begin!</p>
        </div>
    </section>
  )
}

export default Home