import React from 'react';
import { customizationCategories } from '../../data/customizations';
import './styles/sidebar.css';

interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Categories</h3>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`sidebar-nav-item ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => onSelectCategory(null)}
        >
          All Options
        </button>

        {customizationCategories.map(category => (
          <button
            key={category.id}
            className={`sidebar-nav-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
            title={category.displayName}
          >
            {category.displayName}
          </button>
        ))}
      </nav>
    </aside>
  );
}
