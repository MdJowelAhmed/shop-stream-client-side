import axios from "axios";
import { useEffect, useState } from "react";



const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        brandName: '',
        minPrice: '',
        maxPrice: '',
        sort: 'creationDateTime',
        order: 'desc',
        page: 1,
        limit: 10
    });

    const [totalPages, setTotalPages] = useState(0);

    const brands = ["Logitech", "Samsung", "Kitchen", "Asus", "Bose", "Instant Pot", "Sony", "Nest"];
    const categories = ["Electronics", "Furniture", "Kitchen", "Wearable", "Home Appliances", "Accessories"];

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://shop-stream-mu.vercel.app/products', { params: filters });
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
    };

    const handleSortChange = (sortField) => {
        setFilters({ ...filters, sort: sortField, order: filters.order === 'asc' ? 'desc' : 'asc' });
    };

    const handlePageChange = (newPage) => {
        setFilters({ ...filters, page: newPage });
    };

    return (
        <div className="container mx-auto lg:p-4">
            <div className="mb-4">
                <input
                    type="text"
                    name="search"
                    placeholder="Search by product name..."
                    value={filters.search}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <select name="brandName" onChange={handleFilterChange} className="p-2 border rounded">
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>

                <select name="category" onChange={handleFilterChange} className="p-2 border rounded">
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <div className="flex space-x-4">
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
            </div>

            <div className="mb-4 flex space-x-4">
                <button onClick={() => handleSortChange('price')} className="p-2 border rounded">
                    {filters.order === 'asc' ? 'Price: Low to High' : 'Price: High to Low'}
                </button>
                <button onClick={() => handleSortChange('creationDateTime')} className="p-2 border rounded">
                    {filters.order === 'asc' ? 'Date Added: Oldest First' : 'Date Added: Newest First'}
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div key={product._id} className="border p-4 rounded shadow-md">
                                <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover" />
                                <h2 className="mt-2 font-semibold text-lg">{product.productName}</h2>
                                <p>{product.description}</p>
                                <div className="flex justify-between">
                                    <p className="mt-2 font-bold">${product.price}</p>
                                    <p className="mt-2 font-bold">${product.brandName}</p>
                                </div>
                                <div className="flex justify-between mb-5">
                                    <p className="mt-2 font-bold">rating: {product.ratings}</p>
                                    <p className="mt-2 font-bold">category: {product.category}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="mt-2 font-semibold text-lg">{product.creationDateTime}</h2>
                                    <button className="bg-gray-600 opacity-80 text-white px-5 py-2 btn ">Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-around">
                        <button
                            onClick={() => handlePageChange(filters.page - 1)}
                            disabled={filters.page <= 1}
                            className="bg-gray-600 opacity-80 text-white px-5 py-2 btn "
                        >
                            Previous
                        </button>
                        <span   className="bg-gray-600 opacity-80 text-white px-5 py-2 btn ">{filters.page} of {totalPages}</span>
                        <button
                            onClick={() => handlePageChange(filters.page + 1)}
                            disabled={filters.page >= totalPages}
                            className="bg-gray-600 opacity-80 text-white px-5 py-2 btn "
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <p>No products available</p>
            )}
        </div>

    );
};

export default Products;