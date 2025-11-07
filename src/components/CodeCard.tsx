import React from 'react';

type CodeCardProps = {
  title: string;
  code: string;
  language?: 'typescript' | 'javascript';
};

export default function CodeCard({ title, code, language = 'typescript' }: CodeCardProps) {
  const highlightCode = (code: string): React.ReactNode => {
    // Keywords to highlight
    const keywords = ['import', 'from', 'export', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type', 'async', 'await', 'new', 'this'];
    
    const lines = code.split('\n');
    
    return lines.map((line, lineIndex) => {
      const parts: React.ReactNode[] = [];
      let currentIndex = 0;
      
      // Simple regex-based highlighting
      const tokenRegex = /(["'`][^"'`]*["'`])|(\b(?:import|from|export|const|let|var|function|return|if|else|for|while|class|interface|type|async|await|new|this)\b)|(\b[A-Z][a-zA-Z0-9]*\b)|(\b\d+\b)|([a-zA-Z_][a-zA-Z0-9_]*(?=\())/g;
      
      let match;
      let lastIndex = 0;
      
      while ((match = tokenRegex.exec(line)) !== null) {
        // Add text before match
        if (match.index > lastIndex) {
          parts.push(
            <span key={`text-${lineIndex}-${lastIndex}`}>
              {line.substring(lastIndex, match.index)}
            </span>
          );
        }
        
        // Add highlighted match
        if (match[1]) {
          // String
          parts.push(
            <span key={`string-${lineIndex}-${match.index}`} className="text-green-300">
              {match[1]}
            </span>
          );
        } else if (match[2]) {
          // Keyword
          parts.push(
            <span key={`keyword-${lineIndex}-${match.index}`} className="text-purple-400">
              {match[2]}
            </span>
          );
        } else if (match[3]) {
          // Component/Type (starts with capital)
          parts.push(
            <span key={`type-${lineIndex}-${match.index}`} className="text-yellow-300">
              {match[3]}
            </span>
          );
        } else if (match[4]) {
          // Number
          parts.push(
            <span key={`number-${lineIndex}-${match.index}`} className="text-orange-400">
              {match[4]}
            </span>
          );
        } else if (match[5]) {
          // Function call
          parts.push(
            <span key={`function-${lineIndex}-${match.index}`} className="text-yellow-300">
              {match[5]}
            </span>
          );
        }
        
        lastIndex = match.index + match[0].length;
      }
      
      // Add remaining text
      if (lastIndex < line.length) {
        parts.push(
          <span key={`text-${lineIndex}-${lastIndex}`}>
            {line.substring(lastIndex)}
          </span>
        );
      }
      
      return (
        <div key={`line-${lineIndex}`} className="whitespace-pre">
          {parts.length > 0 ? parts : <span>{line}</span>}
        </div>
      );
    });
  };

  return (
    <div className="bg-[#282c34] rounded-lg shadow-xl overflow-hidden">
      {/* Header with macOS dots */}
      <div className="bg-gray-700 px-4 py-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-gray-300 font-medium ml-2">{title}</span>
      </div>
      
      {/* Code content */}
      <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
        {highlightCode(code)}
      </div>
    </div>
  );
}
