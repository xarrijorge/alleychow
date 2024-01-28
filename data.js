
const restaurants = [
    {
        "id": 1,
        "name": "Spicy Jollof Haven",
        "chef": "Chef Kwame",
        "cuisine": "Ghanian",
        "rating": 4.5,
        "location": {
            "latitude": 5.6037,
            "longitude": -0.1870
        },
        "address": "123 Main Street, Accra",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Spicy Jollof Rice", "Grilled Tilapia", "Kelewele"]
    },
    {
        "id": 2,
        "name": "Suya Delights",
        "chef": "Chef Ama",
        "cuisine": "Ghanian",
        "rating": 4.2,
        "location": {
            "latitude": 5.5600,
            "longitude": -0.2050
        },
        "address": "456 Cocoa Avenue, Kumasi",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Beef Suya", "Chicken Suya", "Suya Spiced Fries"]
    },
    {
        "id": 3,
        "name": "Banku Bliss",
        "chef": "Chef Mensah",
        "cuisine": "Ghanian",
        "rating": 4.0,
        "location": {
            "latitude": 5.5575,
            "longitude": -0.2004
        },
        "address": "789 Plantain Road, Tamale",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Banku and Tilapia", "Okro Soup with Banku", "Fried Plantains"]
    },
    {
        "id": 4,
        "name": "Fufu Fusion",
        "chef": "Chef Nana",
        "cuisine": "Ghanian",
        "rating": 4.8,
        "location": {
            "latitude": 5.7980,
            "longitude": -0.2182
        },
        "address": "101 Palm Street, Sekondi-Takoradi",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Fufu with Light Soup", "Groundnut Soup with Fufu", "Fufu and Goat Light Soup"]
    },
    {
        "id": 5,
        "name": "Waakye Wonders",
        "chef": "Chef Yaa",
        "cuisine": "Ghanian",
        "rating": 4.3,
        "location": {
            "latitude": 5.5529,
            "longitude": -0.2123
        },
        "address": "202 Baobab Lane, Cape Coast",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Waakye with Shito", "Fried Fish with Waakye", "Stewed Goat with Waakye"]
    },
    {
        "id": 6,
        "name": "Jollof Kingdom",
        "chef": "Chef Adwoa",
        "cuisine": "Ghanian",
        "rating": 4.6,
        "location": {
            "latitude": 5.6031,
            "longitude": -0.1762
        },
        "address": "789 Palm Avenue, Tema",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Vegetable Jollof", "Jollof with Grilled Chicken", "Jollof with Fried Plantains"]
    },
    {
        "id": 7,
        "name": "Kelewele Corner",
        "chef": "Chef Kofi",
        "cuisine": "Ghanian",
        "rating": 4.4,
        "location": {
            "latitude": 5.5567,
            "longitude": -0.1939
        },
        "address": "234 Coconut Street, Kasoa",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Spicy Kelewele", "Kelewele with Peanuts", "Fried Yam and Kelewele"]
    },
    {
        "id": 8,
        "name": "Kenkey Paradise",
        "chef": "Chef Akua",
        "cuisine": "Ghanian",
        "rating": 4.7,
        "location": {
            "latitude": 5.6130,
            "longitude": -0.1889
        },
        "address": "345 Plantain Lane, Ho",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Grilled Tilapia with Kenkey", "Shrimp and Kenkey", "Kenkey with Pepper Sauce"]
    },
    {
        "id": 9,
        "name": "Yam Fest",
        "chef": "Chef Esi",
        "cuisine": "Ghanian",
        "rating": 4.2,
        "location": {
            "latitude": 5.5835,
            "longitude": -0.2095
        },
        "address": "456 Yam Street, Sunyani",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Fried Yam with Egg Sauce", "Yam Chips with Hot Sauce", "Yam and Garden Egg Sauce"]
    },
    {
        "id": 10,
        "name": "Plantain Paradise",
        "chef": "Chef Osei",
        "cuisine": "Ghanian",
        "rating": 4.9,
        "location": {
            "latitude": 5.7722,
            "longitude": -0.2214
        },
        "address": "101 Banana Avenue, Bolgatanga",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Fried Ripe Plantains", "Plantain Fritters", "Grilled Plantains with Peanut Sauce"]
    },
    {
        "id": 11,
        "name": "Fante Delicacies",
        "chef": "Chef Atta",
        "cuisine": "Ghanian",
        "rating": 4.3,
        "location": {
            "latitude": 5.5567,
            "longitude": -0.1963
        },
        "address": "202 Cassava Road, Cape Coast",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Fante Kenkey with Fish", "Abom with Banku", "Cassava Leaf Soup"]
    },
    {
        "id": 12,
        "name": "Sundown Soursop",
        "chef": "Chef Kweku",
        "cuisine": "Ghanian",
        "rating": 4.5,
        "location": {
            "latitude": 5.5900,
            "longitude": -0.2012
        },
        "address": "789 Mango Street, Koforidua",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Soursop Smoothie", "Soursop Ice Cream", "Soursop Cheesecake"]
    },
    {
        "id": 13,
        "name": "Bambara Bites",
        "chef": "Chef Adu",
        "cuisine": "Ghanian",
        "rating": 4.4,
        "location": {
            "latitude": 5.5502,
            "longitude": -0.1977
        },
        "address": "234 Millet Lane, Tamale",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Bambara Beans Soup", "Bambara Nut Porridge", "Bambara Nut Smoothie"]
    },
    {
        "id": 14,
        "name": "Sorrel Delights",
        "chef": "Chef Naa",
        "cuisine": "Ghanian",
        "rating": 4.6,
        "location": {
            "latitude": 5.6092,
            "longitude": -0.1831
        },
        "address": "345 Hibiscus Road, Sunyani",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Sorrel Drink", "Sorrel Salad", "Sorrel Infused Desserts"]
    },
    {
        "id": 15,
        "name": "Cocoa Haven",
        "chef": "Chef Kojo",
        "cuisine": "Ghanian",
        "rating": 4.7,
        "location": {
            "latitude": 5.5708,
            "longitude": -0.1985
        },
        "address": "101 Cocoa Street, Tema",
        "image": "https://www.savorythoughts.com/wp-content/uploads/2022/02/Ghanaian-Jollof-Rice-Savory-Thoughts-9.jpg",
        "foodList": ["Cocoa Tea", "Chocolate Truffles", "Cocoa-Infused Delicacies"]
    }
]

export default restaurants