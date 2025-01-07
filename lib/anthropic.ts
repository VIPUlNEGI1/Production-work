import { createAnthropic } from '@ai-sdk/anthropic';

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
  baseURL: 'https://api.anthropic.com/v1',
});

// Create a model instance with cache control enabled
export const createModel = (modelId: string = 'claude-3-sonnet-20240620') => {
  return anthropic(modelId, {
    cacheControl: true,
  });
};

// Default model for chat
export const defaultModel = createModel();

// Helper to check if API key is configured
export const isConfigured = () => !!process.env.ANTHROPIC_API_KEY;
