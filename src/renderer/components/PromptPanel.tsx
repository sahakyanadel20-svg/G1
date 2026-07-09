import React, { useState } from 'react';
import { CharacterData } from '../../types';
import { generatePrompt, generateStructuredPrompt } from '../../utils/promptGenerator';
import './styles/prompt.css';

interface PromptPanelProps {
  character: CharacterData;
  onClose: () => void;
}

export default function PromptPanel({ character, onClose }: PromptPanelProps) {
  const [promptType, setPromptType] = useState<'detailed' | 'structured'>('detailed');
  const [copied, setCopied] = useState(false);

  const prompt =
    promptType === 'detailed' ? generatePrompt(character) : generateStructuredPrompt(character);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([prompt], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${character.name}-prompt.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="prompt-panel-overlay">
      <div className="prompt-panel">
        <div className="prompt-header">
          <h2>AI Image Generation Prompt</h2>
          <button onClick={onClose} className="close-btn">
            ✕
          </button>
        </div>

        <div className="prompt-controls">
          <div className="prompt-type-selector">
            <label>
              <input
                type="radio"
                value="detailed"
                checked={promptType === 'detailed'}
                onChange={e => setPromptType(e.target.value as 'detailed' | 'structured')}
              />
              Detailed
            </label>
            <label>
              <input
                type="radio"
                value="structured"
                checked={promptType === 'structured'}
                onChange={e => setPromptType(e.target.value as 'detailed' | 'structured')}
              />
              Structured
            </label>
          </div>

          <div className="prompt-actions">
            <button onClick={handleCopy} className="action-btn copy-btn">
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
            <button onClick={handleDownload} className="action-btn download-btn">
              📥 Download
            </button>
          </div>
        </div>

        <div className="prompt-content">
          <textarea readOnly value={prompt} className="prompt-textarea" />
        </div>

        <div className="prompt-info">
          <span>Character: {character.name}</span>
          <span>Word count: {prompt.split(/\s+/).length}</span>
        </div>
      </div>
    </div>
  );
}
