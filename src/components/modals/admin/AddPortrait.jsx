import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'



const backDrop = {
    visible : {opacity : 1 },
    hidden : {opacity : 0 }
}

const modal = {
    hidden : {
        y: "-100vh",
        opacity: 0
    },
    visible : {
        y: "50px",
        opacity: 1,
        transition: { delay : 0.5 }
    }
}

export default function AddPortrait({setShowModal}) {


    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        console.log('File change')
        const file = event.target.files[0];
        console.log(file.name)
        if (file) {
        // Check if the selected file type is allowed
        const allowedTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];
        if (allowedTypes.includes(file.type)) {
            // Set the selected file in the state
            setSelectedFile(file);
            const previewURL = URL.createObjectURL(file);
            setImagePreview(previewURL);
        } else {
            alert('Invalid file type. Please select a PNG, JPG, or SVG file.');
            // Optionally clear the file input
            event.target.value = null;
        }
        } else {
            // If no file is selected, reset the state
            setSelectedFile(null);
        }
    };
    

    return (
        <AnimatePresence >
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                variants={backDrop} initial="hidden" animate="visible" >
                    <motion.div onClick={(e) =>  e.stopPropagation()}
                    className=' w-full max-w-2xl  mx-auto '
                    variants={modal} >
                        <div 
                        className="relative p-4 w-full  h-full md:h-auto">
                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Add New Portrait
                                </h3>
                                <button onClick={() => setShowModal(false)}  type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            
                            <form action="#">
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    {selectedFile ? (
                                        <div className="flex items-center justify-center w-full sm:col-span-2">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    
                                                    {imagePreview && <img src={imagePreview} className=' max-h-[200px] max-w-[150px]'></img>}
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload a different image</span> </p>
                                                    {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p> */}
                                                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{selectedFile.name}</p>
                                                </div>
                                                <input onChange={handleFileChange} accept=".png, .jpg, .jpeg, .svg"
                                                    id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div> 
                                    ): (
                                        <div className="flex items-center justify-center w-full sm:col-span-2">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> </p>
                                                    {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p> */}
                                                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, or JPG (MAX. 800x400px)</p>
                                                </div>
                                                <input onChange={handleFileChange} accept=".png, .jpg, .jpeg, .svg"
                                                    id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div> 
                                    )}


                                    <div>
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input type="number" name="price" id="price" className="custom-input " placeholder="$299"/>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">

                                    <motion.button whileTap={{ scale: 0.75 }}  onClick={()=>setShowModal(true)} type="submit" className="dark-button ">
                                        Save
                                    </motion.button>
                                    
                                    <motion.button whileTap={{ scale: 0.75 }}   onClick={()=>setShowModal(false)} type="button" className="cancel-button">
                                        Cancel
                                    </motion.button>

                                    
                                </div>
                            </form>
                        </div>
                    </div>
                        
                </motion.div>
                </motion.div>
        </AnimatePresence> 
    )
}
