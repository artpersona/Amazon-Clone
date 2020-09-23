import React from 'react'
import './Home.css'
import Product from './Product.js'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__img" 
                src="https://media-us-standrad.s3.amazonaws.com/wp-content/uploads/2020/05/28190309/BLOG_ReijiMiyajima-KCcom_1500x500.png" alt="backdrop"/>
                {/* <img  className="home__img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="backdrop"/> */}
                {/* https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg */}
                {/* https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg */}
            <div className="home__row">
                <Product 
                id = {1}
                title="Chizuru Mizuhara" 
                price={99.99}
                image= "https://www.anime-planet.com/images/characters/chizuru-mizuhara-157856.jpg"
                rating = {5}
                />
                <Product 
                 id = {2}
                title="Ruka Sarashina" 
                price={59.99}
                image= "https://i.pinimg.com/474x/67/e4/3c/67e43cc3e74908d8dec226888b6eed50.jpg"
                rating = {5}
                />
                <Product 
                 id = {3}
                title="Sumi Sakurasawa" 
                price={59.99}
                image= "https://cdn.myanimelist.net/images/characters/9/409383.jpg"
                rating = {5}
                />
                <Product 
                 id = {4}
                title="Mami Nanami" 
                price={0}
                image= "https://cdn.myanimelist.net/images/characters/12/409384.jpg"
                rating = {1}
                />
            </div>

            <div className="home__row"> 
                <Product 
                    id = {5}
                    title="Yukino Yukinoshita" 
                    price={99.99}
                    image= "https://s2.vndb.org/ch/33/64733.jpg"
                    rating = {5}
                 />
                 <Product 
                    id = {6}
                    title="Yui Yuigahama" 
                    price={99.99}
                    image= "https://s2.vndb.org/ch/38/64738.jpg"
                    rating = {5}
                 />
            
            </div>

            <div className="home__row">
             
            </div>


          </div>  
        </div>
    )
}

export default Home
