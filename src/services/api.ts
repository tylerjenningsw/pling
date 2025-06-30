const BACON_IPSUM_API = 'https://baconipsum.com/api/'

interface BaconIpsumOptions {
  type?: 'all-meat' | 'meat-and-filler'
  paras?: number
  sentences?: number
  startWithLorem?: boolean
  format?: 'json' | 'text' | 'html'
}

export async function fetchBaconIpsum(options: BaconIpsumOptions = {}): Promise<string[]> {
  const params = new URLSearchParams({
    type: options.type || 'all-meat',
    format: 'json',
    ...(options.paras && { paras: options.paras.toString() }),
    ...(options.sentences && { sentences: options.sentences.toString() }),
    ...(options.startWithLorem !== undefined && { 
      'start-with-lorem': options.startWithLorem ? '1' : '0' 
    }),
  })
  
  try {
    const response = await fetch(`${BACON_IPSUM_API}?${params}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json() as string[]
    return data
  } catch (error) {
    console.error('Error fetching from Bacon Ipsum:', error)
    // Return fallback text
    return ['Loading content...']
  }
}

// Helper function to get random placeholder text
export async function getPlaceholderText(sentences = 1): Promise<string> {
  const data = await fetchBaconIpsum({ sentences })
  return data[0] || 'Loading...'
}

// Mock API for fitness data
export const fitnessAPI = {
  async getWorkoutPlan(): Promise<string> {
    const text = await getPlaceholderText(2)
    return text
  },
  
  async getDailyTip(): Promise<string> {
    const text = await getPlaceholderText(1)
    return text
  },
  
  getMotivationalQuote(): string {
    const quotes = [
      'The only bad workout is the one that didn\'t happen.',
      'Sweat now, shine later.',
      'Your body can stand almost anything. It\'s your mind you have to convince.',
      'Success starts with self-discipline.',
      'Don\'t stop when you\'re tired. Stop when you\'re done.',
    ]
    return quotes[Math.floor(Math.random() * quotes.length)]
  },
}