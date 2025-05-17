import { EntryField, EntryFieldType } from "contentful";
import { EntryFieldTypes } from 'contentful';
import { Document } from '@contentful/rich-text-types';


export type ProductSkeleton = {
  contentTypeId: "product";
  fields: {
    title: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    calories: EntryFieldTypes.Integer;
    description: Document;
    thumbnail: EntryFieldTypes.Symbol;
    protein: EntryFieldTypes.Text;
    totalCarbs: EntryFieldTypes.Text;
    totalFat: EntryFieldTypes.Text;
    saturatedFat: EntryFieldTypes.Text;
    transFat: EntryFieldTypes.Text;
    cholesterol: EntryFieldTypes.Text;
    dietaryFiber: EntryFieldTypes.Text;
    totalSugars: EntryFieldTypes.Text;
    addedSugars: EntryFieldTypes.Text;
    vitaminD: EntryFieldTypes.Text;
    calcium: EntryFieldTypes.Text;
    iron: EntryFieldTypes.Text;
    potassium: EntryFieldTypes.Text;
    sodium: EntryFieldTypes.Text;
    ingredients: EntryFieldTypes.Object;
    allergenInformation: EntryFieldTypes.RichText;
    size: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;

      }

};


export interface ProductFields {
    title: string ;
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

