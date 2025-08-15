import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import './ImageAnimation.css';


export interface ImageAnimationRef {
  handleImageClick: (answer: string) => void;
}

const ImageAnimation = forwardRef<ImageAnimationRef>((props, ref) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [gameState, setGameState] = useState<'guessing' | 'correct' | 'wrong' | 'animating'>('guessing');
  const [wrongGuessCount, setWrongGuessCount] = useState(0);

  // Animation sequence images (AI Chinese whisper progression)
  const animationImages = [
    '/data/intermediate1-10.webp',
    '/data/intermediate1-9.webp',
    '/data/intermediate1-8.webp',
    '/data/intermediate1-7.webp',
    '/data/intermediate1-6.webp',
    '/data/intermediate1-5.webp',
    '/data/intermediate1-4.webp',
    '/data/intermediate1-3.webp',
    '/data/intermediate1-2.webp',
    '/data/intermediate1-1.webp',
    '/data/option2.webp'
  ];

  // Prompts for each intermediate image (index 0-9)
  const animationPrompts = [
    "A serene mountain lake at sunset, reflecting vibrant colors, --ar 16:9 --v 5 --stylize 1000",
    "A serene landscape at sunset with mountains, soft clouds, vibrant colors --ar 16:9 --v 5 --stylize 1000",
    "A breathtaking view at sunset, mountains in the background, vibrant colors, --ar 16:9 --v 5 --stylize 1000",
    "A breathtaking view over serene mountains, vibrant colors, --ar 16:9, ultra-detailed, 8k",
    "A breathtaking landscape, mountains in the background, vibrant colors, --ar 16:9 --v 5 --stylize 1000",
    "A vibrant sunset over a serene lake, mountains in the background, --ar 16:9, --v 5, --stylize 1000",
    "A surreal sunset over a tranquil lake, vibrant colors, perfect symmetry, --ar 16:9, --v 6, 8k",
    "A serene sunset over a tranquil lake, vibrant colors, perfect symmetry, --ar 16:9 --v 5 --stylize 1000",
    "A stunning sunset over a tranquil lake, vibrant colors, --ar 16:9, photorealistic, high quality",
    "A serene sunset over a mountain range, warm colors, dramatic lighting, --ar 16:9, --v 5, --quality 2",

  ];

  // Fun wrong guess messages
  const wrongGuessMessages = [
    "Oops! That's not quite right! 🤔",
    "Nice try, but nope! 😅",
    "Wrong answer, but keep guessing! 🎯",
    "Not this one! Try again! 💪",
    "Close, but no cigar! 🚬",
    "That's a swing and a miss! ⚾",
    "Wrong choice, but you're getting warmer! 🔥",
    "Nope! The AI is playing tricks on you! 🤖",
    "Wrong guess! The AI is laughing! 😂",
    "Not even close! But don't give up! 🎪"
  ];

  const handleImageClick = (answer: string) => {
    if (gameState === 'animating') return; // Prevent clicking during animation
    if (answer === "B") {
      setGameState('correct');
      setTimeout(() => {
        setGameState('animating');
        setIsAnimating(true);
        setShowAnimation(true);
        setCurrentAnimationIndex(0);
      }, 3000);
    } else {
      setGameState('wrong');
      setWrongGuessCount(prev => prev + 1);
      setTimeout(() => {
        setGameState('guessing');
      }, 2000);
    }
  };

  useImperativeHandle(ref, () => ({
    handleImageClick,
  }));

  const handleAIImageClick = () => {
    if (gameState === 'guessing') {
      setGameState('wrong');
      setWrongGuessCount(prev => prev + 1);
      setTimeout(() => {
        setGameState('guessing');
      }, 4000);
    }
  };

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentAnimationIndex((prev) => {
        if (prev >= animationImages.length - 1) {
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3000); // Change image every 800ms

    return () => clearInterval(interval);
  }, [isAnimating, animationImages.length]);


  const resetGame = () => {
    setShowAnimation(false);
    setCurrentAnimationIndex(0);
    setIsAnimating(false);
    setGameState('guessing');
    setWrongGuessCount(0);
  };

  const getRandomWrongMessage = () => {
    return wrongGuessMessages[Math.floor(Math.random() * wrongGuessMessages.length)];
  };

  return (
      <div className="panel right-panel">
        {showAnimation ? (
          // Animation Display (same as before)
          <div className="animation-container">
            <div className="animation-header">
              <h2>🎉 You Got It Right!</h2>
              <p>Watch the AI Chinese Whisper transformation!</p>
              <button className="reset-button" onClick={resetGame}>
                Play Again
              </button>
            </div>
            
            <div className="animation-display">
              <div className="animation-prompt">
                {animationPrompts[currentAnimationIndex]}
              </div>
              <img
                src={animationImages[currentAnimationIndex]}
                alt={`AI Generation ${currentAnimationIndex + 1}`}
                className="animation-image"
              />
              <div className="animation-info">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentAnimationIndex + 1) / animationImages.length) * 100}%` }}
                  ></div>
                </div>
                <p className="iteration-text">
                  Iteration {currentAnimationIndex + 1} of {animationImages.length}
                </p>
              </div>
            </div>

            {isAnimating && (
              <div className="animation-status">
                <div className="spinner"></div>
                <span>Transforming...</span>
              </div>
            )}

            {!isAnimating && currentAnimationIndex === animationImages.length - 1 && (
              <div className="animation-complete">
                <h3>🎊 Transformation Complete!</h3>
                <p>You successfully identified the original image!</p>
                <p>Watch how the same prompt evolved through 10 AI iterations</p>
              </div>
            )}
          </div>
        ) : gameState === 'wrong' ? (
          // Wrong Guess Message
          <div className="wrong-guess-message">
            <div className="wrong-icon">❌</div>
            <h2>Wrong Guess!</h2>
            <p className="wrong-text">{getRandomWrongMessage()}</p>
            <div className="hint">
              <p>💡 Hint: Look closely at the details!</p>
              <p>🎯 Try again - you can do it!</p>
            </div>
          </div>
        ) : gameState === 'correct' ? (
          // Correct Guess Celebration
          <div className="correct-guess-message">
            <div className="correct-icon">🎉</div>
            <h2>Correct!</h2>
            <p>You found the original image!</p>
            <p>Preparing the AI transformation...</p>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          // Main Game View
          <div className="game-container">
            <div className="game-header-right">
              <h2>🤖 AI Generated Image</h2>
              <p>This image was created by AI based on one of the 4 images on the left</p>
            </div>
            
            <div className="ai-image-container">
              <img
                src="/data/intermediate1-10.webp"
                alt="AI Generated Image"
                className="ai-generated-image"
                onClick={handleAIImageClick}
              />
              <div className="click-hint">💡 Click me for a hint!</div>
            </div>

            <div className="game-stats">
              <div className="stat-item">
                <span className="stat-label">Wrong Guesses:</span>
                <span className="stat-value">{wrongGuessCount}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Status:</span>
                <span className="stat-value">Ready to Guess! 🎯</span>
              </div>
            </div>
          </div>
        )}
      </div>
  );
});

export default ImageAnimation;
