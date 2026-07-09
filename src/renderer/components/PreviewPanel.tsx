import React, { useState } from 'react';
import { CharacterData } from '../../types';
import { getCharacterSummary } from '../../utils/characterUtils';
import './styles/preview.css';

interface PreviewPanelProps {
  character: CharacterData;
}

export default function PreviewPanel({ character }: PreviewPanelProps) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [bgColor, setBgColor] = useState('#2d2d2d');

  const summary = getCharacterSummary(character);

  return (
    <div className="preview-panel">
      <div className="preview-controls">
        <div className="control-group">
          <label>Zoom: {zoom}%</label>
          <input
            type="range"
            min="50"
            max="200"
            value={zoom}
            onChange={e => setZoom(Number(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>Rotation: {rotation}°</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={e => setRotation(Number(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>Background</label>
          <input
            type="color"
            value={bgColor}
            onChange={e => setBgColor(e.target.value)}
            className="control-color"
          />
        </div>
      </div>

      <div className="preview-viewport" style={{ backgroundColor: bgColor }}>
        <div
          className="preview-container"
          style={{
            transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
          }}
        >
          <div className="character-placeholder">
            <div className="placeholder-icon">👤</div>
            <div className="placeholder-text">{summary}</div>
          </div>
        </div>
      </div>

      <div className="preview-info">
        <div className="info-item">
          <span className="info-label">Character Name:</span>
          <span className="info-value">{character.name}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Customizations:</span>
          <span className="info-value">{Object.keys(character.customizations).length}</span>
        </div>
      </div>
    </div>
  );
}
