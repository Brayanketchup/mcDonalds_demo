

// export interface infoBoxProps {

//     imageLink: string,
//     title: string,
//     info: string,
//     disclaimer: string,
//     buttonText: string,
//     buttonLink: string

// }
export interface ProductFields {
    title: string;
    category: string;
    calories: number;
    description?: Document;
    thumbnail: string;
    protein: string;
    totalCarbs: string;
    totalFat: string;
    saturatedFat?: string;
    transFat?: string;
    cholesterol?: string;
    dietaryFiber?: string;
    totalSugars?: string;
    addedSugars?: string;
    vitaminD?: string;
    calcium?: string;
    iron?: string;
    potassium?: string;
    sodium?: string;
    ingredients?: { name: string; image: string }[];
    allergenInformation: Document;
    size?: string;
    slug: string;
  }