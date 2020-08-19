import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
           <img
           className="home-image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
           alt="amazon banner"></img>


           {/* Product Id, title, price, rating, image */ }
            <div className="home-row">
            <Product 
            id="1"
            title="Demo Product 1"
            price={50.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />
             <Product 
            id="2"
            title="Demo Product 2"
            price={802.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />

            </div>

            <div className="home-row">
            <Product 
            id="3"
            title="Demo Product 3"
            price={32.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />


<Product 
            id="4"
            title="Demo Product 4"
            price={66.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />


<Product 
            id="5"
            title="Demo Product 5"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />


            </div>


            <div className="home-row">
            <Product 
            id="5"
            title="Demo Product 5"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />
            
            </div>
           


           {/* Product */}
           
        </div>
    )
}

export default Home
