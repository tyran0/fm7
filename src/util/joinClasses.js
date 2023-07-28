export function joinClasses(...classes) {
    const rootClasses = [];

    for (let i = 0; i < classes.length; i++) {
        const stringOrComparison = classes[i];
        if (!stringOrComparison) continue;

        if (typeof stringOrComparison === "string") {
            rootClasses.push(stringOrComparison);
            continue;
        }

        if (!Array.isArray(stringOrComparison)) continue;
        
        const value = stringOrComparison[0];
        const condition = stringOrComparison[1];

        if (condition) rootClasses.push(value);
    }

    return rootClasses.join(" ");
}