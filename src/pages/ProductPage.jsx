// src/components/ProductPage.jsx
import React, { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar.jsx';
import ProductList from '../components/ProductList.jsx';
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    colors: [],
    sizes: [],
    brands: [],
    categories: []
  });
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    colors: [],
    sizes: [],
    brands: [],
    category: categoryId || null
  });
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        const queryParams = new URLSearchParams();
        queryParams.append('minPrice', filters.minPrice);
        queryParams.append('maxPrice', filters.maxPrice);
        
        if (filters.colors.length > 0) {
          queryParams.append('colors', filters.colors.join(','));
        }
        
        if (filters.sizes.length > 0) {
          queryParams.append('sizes', filters.sizes.join(','));
        }
        
        if (filters.brands.length > 0) {
          queryParams.append('brands', filters.brands.join(','));
        }
        
        if (filters.category) {
          queryParams.append('category', filters.category);
        }

        const response = await fetch(`api.php?${queryParams.toString()}`);
        const data = await response.json();
        
        setProducts(data.products);
        setFilterOptions(data.filterOptions);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, categoryId]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Mobile filter button */}
      <div className="md:hidden bg-white shadow-sm py-2 px-4">
        <button 
          onClick={toggleSidebar}
          className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
        >
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Filters
        </button>
      </div>

      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row w-full">
          {/* Sidebar - Hidden on mobile unless opened */}
          <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative inset-0 z-40 md:z-auto bg-white md:bg-transparent w-full md:w-64 lg:w-72 h-full md:h-auto overflow-y-auto`}>
            <div className="md:hidden flex justify-end p-4">
              <button 
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 md:p-0 md:pr-4">
              <Sidebar 
                filterOptions={filterOptions}
                filters={filters}
                onFilterChange={handleFilterChange}
                currentCategory={categoryId}
              />
            </div>
          </div>

          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
              onClick={toggleSidebar}
            />
          )}

          {/* Main content - Chiếm full chiều ngang còn lại */}
          <div className="flex-1 w-full py-6">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm w-full">
                <ProductList products={products} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;