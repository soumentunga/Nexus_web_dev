//Dummy Data for Different Catagory


const arr=[
    {
      "cloth": "Tshirt",
      "Offer": "20-40% Off",
      "Image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Pant",
      "Offer": "30-50% Off",
      "Image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Skirt",
      "Offer": "10-20% Off",
      "Image": "https://apanakah.com/cdn/shop/products/twilight-ripples-red-stripes-midi-skirt-in-organic-cotton-704330.jpg?v=1635451460"
    },
    {
      "cloth": "Kurta for Women",
      "Offer": "30-60% Off",
      "Image": "https://www.sanskrutihomes.in/cdn/shop/products/women-pure-cotton-kurta-with-pajama-kurti-dupatta-set-pant-rangdeep-fashions-756869_21987400-460d-4dab-bc53-c2a91e7c2f28.jpg?v=1741136793&width=1080"
    },
    {
      "cloth": "Patloon",
      "Offer": "11-40% Off",
      "Image": "https://m.media-amazon.com/images/I/31Cfx1zLDtL._AC_UY1100_.jpg"
    },
    {
      "cloth": "Shoes",
      "Offer": "40-60% Off",
      "Image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Shirt",
      "Offer": "10-20% Off",
      "Image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Sleeping Dress",
      "Offer": "30-50% Off",
      "Image": "https://afterdark.co.in/cdn/shop/files/IMG_7246.jpg?v=1696352484&width=1200"
    },
    {
      "cloth": "Casual Wear",
      "Offer": "30-50% Off",
      "Image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Jeans",
      "Offer": "20-40% Off",
      "Image": "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Jacket",
      "Offer": "30-50% Off",
      "Image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Sweater",
      "Offer": "10-20% Off",
      "Image": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Blazer",
      "Offer": "30-60% Off",
      "Image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Shorts",
      "Offer": "11-40% Off",
      "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgT9sS57u1Qrqn7mJMu3W9wckmIFUrVpSBXA&s"
    },
    {
      "cloth": "Sandals",
      "Offer": "40-60% Off",
      "Image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Bag & BagPacks",
      "Offer": "20-70% Off",
      "Image": "https://m.media-amazon.com/images/I/51VV6zFer4L._AC_UY1000_.jpg"
    },
    {
      "cloth": "Scarf",
      "Offer": "30-50% Off",
      "Image": "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Gloves",
      "Offer": "30-50% Off",
      "Image": "https://m.media-amazon.com/images/I/51jmXXq9euL.jpg"
    },
    {
      "cloth": "Socks",
      "Offer": "20-40% Off",
      "Image": "https://m.media-amazon.com/images/I/91WsmoDZYWL._AC_UY1100_.jpg"
    },
    {
      "cloth": "Belt",
      "Offer": "30-50% Off",
      "Image": "https://m.media-amazon.com/images/I/51QF5REihTL._AC_UY1100_.jpg"
    },
    {
      "cloth": "Dress",
      "Offer": "25-45% Off",
      "Image": "https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Coat",
      "Offer": "35-55% Off",
      "Image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Yoga Leggings",
      "Offer": "15-35% Off",
      "Image": "https://beyondyoga.com/cdn/shop/files/PY3243_pressed-flowers_0068.jpg?v=1718819071"
    },
    {
      "cloth": "Cap",
      "Offer": "20-30% Off",
      "Image": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      "cloth": "Watches & Wearables",
      "Offer": "20-30% Off",
      "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0tmycU3S19hGv800ke1mAKWlybQ8zyuHvQ&s"
    },
    {
      "cloth": "Eyeware",
      "Offer": "20-30% Off",
      "Image": "https://m.media-amazon.com/images/I/61z4LQyk4sL._AC_UY1100_.jpg"
    }
  ]

export default arr;