import FoodCardSkeleton from '@/components/skeleton/FoodCardSkeleton';
import React from 'react';

const Loading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, index) => (
                <FoodCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default Loading;