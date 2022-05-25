export function formatDate(date: Date) {
    const [dd, mm , yyyy] = date.toLocaleDateString().split(".")
    return `${yyyy}-${mm}-${dd}`
}