// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//   const [selectedFoodGroup, setSelectedFoodGroup] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200">
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Find Street Food"
//             className="w-7/10 flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" // Adjusted class here
//           />
//         </div>
//         <div className="flex items-end">
//           <select
//             value={selectedFoodGroup}
//             onChange={(e) => setSelectedFoodGroup(e.target.value)}
//             className="ml-4 px-4 py-2 border mx-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             <option value="">All Food Groups</option>
//             <option value="1">Food Group 1</option>
//             {/* Add more food group options */}
//           </select>
//           <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
//             Get Street Food
//           </button>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8 flex flex justify-between items-center">
//         <div className="flex flex-col items-start space-y-4">
//           <h1 className="text-3xl font-bold mb-4">
//             Welcome to Street Food Listing
//           </h1>
//           <p className="text-lg text-gray-600">
//             Discover new food vendors in your area.
//           </p>
//           <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
//             Start Exploring
//           </button>
//         </div>
//         <div className="bg-orange-400 w-1/3 rounded-lg p-8 flex items-center justify-center">
//           <Image
//             src="/wakyee.png" // Replace with your image path
//             alt="Street Food"
//             width={400}
//             height={300}
//             objectFit="cover"
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//   const [selectedFoodGroup, setSelectedFoodGroup] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200">
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Find Street Food"
//             className="w-7/10 flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" // Adjusted class here
//           />
//         </div>
//         <div className="flex items-end">
//           <select
//             value={selectedFoodGroup}
//             onChange={(e) => setSelectedFoodGroup(e.target.value)}
//             className="ml-4 px-4 py-2 border mx-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             <option value="">All Food Groups</option>
//             <option value="1">Food Group 1</option>
//             {/* Add more food group options */}
//           </select>
//           <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
//             Get Street Food
//           </button>
//         </div>
//       </nav>

// <main className="container mx-auto px-4 py-8 flex flex justify-between items-center">
//   <div className="flex flex-col items-start space-y-4">
//     <h1 className="text-3xl font-bold mb-4">
//       Welcome to Street Food Listing
//     </h1>
//     <p className="text-lg text-gray-600">
//       Discover new food vendors in your area.
//     </p>
//     <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 order-1 md:order-2">
//       Start Exploring
//     </button>
//         </div>
//         <div className="bg-orange-400 w-1/3 rounded-lg p-8 flex items-center justify-center order-2 md:order-1">
//           <Image
//             src="/wakyee.png" // Replace with your image path
//             alt="Street Food"
//             width={400}
//             height={300}
//             objectFit="cover"
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//   const [selectedFoodGroup, setSelectedFoodGroup] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white py-4 px-6 flex items-center md:justify-between border-b border-gray-200">
//         <div className="">
//           <input
//             type="text"
//             placeholder="Find Street Food"
//             className="w-full md:w-7/10 lg:w-6/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//         </div>
// <div className="flex justify-between mt-4 md:mt-0 ">
//   <select
//     value={selectedFoodGroup}
//     onChange={(e) => setSelectedFoodGroup(e.target.value)}
//     className="ml-4 px-4 py-2 border mx-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//   >
//     <option value="">All Food Groups</option>
//     <option value="1">Food Group 1</option>
//     {/* Add more food group options */}
//   </select>
//   <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
//     Get Food
//   </button>
// </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
//         <div className="bg-orange-400 w-full md:w-5/12 rounded-lg p-8 flex items-center justify-center order-1 md:order-2">
//           <Image
//             src="/wakyee.png" // Replace with your image path
//             alt="Street Food"
//             width={400}
//             height={300}
//             objectFit="cover"
//           />
//         </div>

//         <div className="flex flex-col items-start space-y-4 md:w-7/12 order-2 md:order-1">
//           <h1 className="text-2xl font-bold mt-8 mt:mb-0 md:text-7xl">
//             Welcome to Street Food Listing
//           </h1>
//           <p className="text-lg text-gray-600">
//             Discover local food vendors in your area.
//           </p>
//           <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
//             Start Exploring
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedFoodGroup, setSelectedFoodGroup] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white py-4 px-6 flex flex-col md:flex-row items-center md:justify-between border-b border-gray-200">
        {/* <div className="mb-4 md:mb-0"> */}
        <input
          type="text"
          placeholder="Find Street Food"
          className="w-full md:w-6/10 lg:w-6/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {/* </div> */}
        <div className="flex justify-between mt-4 md:mt-0 ">
          <select
            value={selectedFoodGroup}
            onChange={(e) => setSelectedFoodGroup(e.target.value)}
            className="ml-4 px-4 py-2 mx-4 rounded-md focus:outline-none "
          >
            <option value="">All Food Groups</option>
            <option value="1">Food Group 1</option>
            {/* Add more food group options */}
          </select>
          <button className="bg-orange-400 text-white px-12 rounded-md hover:bg-orange-600 ml-4 border mx-4">
            Search
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="bg-orange-400 w-full md:w-5/12 rounded-lg p-8 flex items-center justify-center order-1 md:order-2">
          <Image
            src="/wakyee.png" // Replace with your image path
            alt="Street Food"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col items-start space-y-4 md:w-7/12 order-2 md:order-1">
          <h1 className="text-2xl font-bold mt-8 mt:mb-0 md:text-7xl">
            Welcome to Street Food Listing
          </h1>
          <p className="text-lg text-gray-600">
            Discover local food vendors in your area.
          </p>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Start Exploring
          </button>
        </div>
      </main>
    </div>
  );
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       Hallo am the body
    </main>
  )
}
