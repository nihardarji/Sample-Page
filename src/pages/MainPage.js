import React from 'react'
import TopHeader from '../components/layouts/TopHeader'
import SearchComponent from '../components/layouts/SearchComponent'
import Category from '../components/layouts/Category'
import Places from '../components/layouts/Places'
import Directory from '../components/layouts/Directory'
import Business from '../components/layouts/Business'
import ContactForm from '../components/layouts/ContactForm'
import Footer from '../components/layouts/Footer'

const MainPage = () => {
    return (
        <div>
            <TopHeader/>
            <SearchComponent/>
            <Category/>
            <Places/>
            <Directory/>
            <Business/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default MainPage
