import React from 'react'
import { AboutCategoryLayout } from '@/components'

export default function page() {
  return (
    <div className='w-[80vw] flex flex-col justify-self-center pt-10'>

      <AboutCategoryLayout
        imagelink='/about/about_Our_Food_Hero.jpg'
        tittle='We are Passionate About Our Food'
        description="Explore McDonald's food facts, including calorie and dietary info. 
        Learn about nutrition facts and the ingredients used to deliver quality in every meal,
         including more balanced options for a Happy Meal® and each fresh beef Quarter 
         Pounder®* burger is cooked when you order."
      />
      <AboutCategoryLayout
        imagelink='/about/what-is-in-your-food.jpg'
        tittle='We know you care about the food you eat.'
        description="That's why we use quality ingredients like
          100% beef patties with no preservatives, fillers
          or additives. And we use a select variety of crisp,
          quality apples such as Gala and Pink Lady. Take a deep
          dive into McDonald's ingredients to find out what makes our food delicious."
      />
      <AboutCategoryLayout
        imagelink='/about/our-food-philosophy.jpg'
        tittle='Our Food Philosophy'
        description="At McDonald's, we're passionate about our food. We take great care 
        that what we serve every day is safe, great quality, offers choice and is produced 
        in a responsible way. That means we use 100% pure beef patties seasoned with just a
         pinch of salt and pepper. It means our Egg McMuffin® is made with a freshly cracked 
         egg. And, in the U.S., our Filet-O-Fish® sandwich is made with whitefish sourced from 
         sustainably managed wild-caught fisheries. It means our Chicken McNuggets® are made with white meat chicken. 
        Simply put, it means we're committed to always evolving what matters to you."
      />

    </div>
  )
}
