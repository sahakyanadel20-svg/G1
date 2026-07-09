import React, { useMemo } from 'react';
import { CharacterData } from '../../types';
import { customizationCategories } from '../../data/customizations';
import './styles/customization.css';

interface CustomizationPanelProps {
  character: CharacterData;
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  onCategoryUpdate: (categoryId: string, value: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function CustomizationPanel({
  character,
  selectedCategory,
  onSelectCategory,
  onCategoryUpdate,
  searchQuery,
  onSearchChange,
}: CustomizationPanelProps) {
  const filteredCategories = useMemo(() => {
    let categories = customizationCategories;

    if (selectedCategory && selectedCategory !== 'all') {
      categories = categories.filter(cat => cat.id === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      categories = categories
        .map(cat => ({
          ...cat,
          options: cat.options.filter(
            opt =>
              opt.name.toLowerCase().includes(query) ||
              opt.value.toLowerCase().includes(query) ||
              (opt.tags && opt.tags.some(tag => tag.toLowerCase().includes(query)))
          ),
        }))
        .filter(cat => cat.options.length > 0);
    }

    return categories;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="customization-panel">
      <div className="customization-header">
        <input
          type="text"
          placeholder="Search options..."
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="customization-content">
        {filteredCategories.length === 0 ? (
          <div className="no-results">
            <p>No customization options found.</p>
            {searchQuery && (
              <button onClick={() => onSearchChange('')} className="clear-search-btn">
                Clear search
              </button>
            )}
          </div>
        ) : (
          filteredCategories.map(category => (
            <div key={category.id} className="customization-group">
              <div className="group-header">
                <h4>{category.displayName}</h4>
              </div>

              <div className="group-options">
                {category.options.map(option => (
                  <div key={option.id} className="option-item">
                    <label className="option-label">
                      <span className="option-name">{option.name}</span>
                      {option.imageUrl && (
                        <img
                          src={option.imageUrl}
                          alt={option.name}
                          className="option-thumbnail"
                        />
                      )}
                    </label>

                    <select
                      value={character.customizations[category.id] || ''}
                      onChange={e => onCategoryUpdate(category.id, e.target.value)}
                      className="option-select"
                    >
                      <option value="">-- Select --</option>
                      {category.options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
