import React from 'react';

export const GlobalFilter = ({ setGlobalFilter }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 border"
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
        </div>
    );
};
