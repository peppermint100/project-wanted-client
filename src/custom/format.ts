
export const formatDate = (date: string) => date.substring(0, 10)
export const formatDescription = (content: string, limit: number) => {
    if (content.length > limit) {
        return `${content.substring(0, limit)}...`
    }
    return content
} 