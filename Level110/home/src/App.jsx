import React from 'react'
import CurlyBraces from './components/CurlyBraces'
import ClassVSclassName from './components/classVSclassName'
import SelfClosingTag from './components/self-closing tag'
import VariablesInJSX from './components/VariablesInJSX'


const App = () => {
    //!  class vs className
  //& JSX-ში class არ გამოიყენება, რადგან ეს სიტყვა უკვე გამოიყენება JavaScript-ში (მაგ. class MyComponent). ამიტომ, სტილის მინიჭებისთვის გამოიყენება className, რაც HTML-ის class-ის ანალოგია React-ში.

    //! Self-closing tags
  //& JSX-ში ყველა HTML ელემენტი უნდა დაიხუროს. თუ ელემენტს არ აქვს შიგთავსი (children), ის უნდა დაიწეროს თვითდახურული ფორმით — ანუ <tag />. ეს ეხება ისეთ ელემენტებს, როგორიცაა img, input, br, hr და სხვა.

    //! Curly braces {} JSX-ში
  //& ფიგურული ფრჩხილები {} გამოიყენება JSX-ში JavaScript-ის კოდის ჩასასმელად. მათით შეგვიძლია გამოვიყენოთ ცვლადები, ფუნქციები, პირობითი ლოგიკა, გამოთვლები და სხვა ნებისმიერი JS გამოხატულება.

    //! Variable attribute
  //& JSX-ში HTML ატრიბუტებს შეგვიძლია მივანიჭოთ ცვლადები {}-ის საშუალებით. მაგალითად, type={inputType} ნიშნავს, რომ type ატრიბუტის მნიშვნელობა მოდის ცვლადიდან. ეს საშუალებას გვაძლევს დინამიკურად ვმართოთ ელემენტის თვისებები.


  return (
    <>
      <h1 style={{ color: 'red' }}>class VS className</h1>
      <ClassVSclassName />
      <h1 style={{ color: 'red' }}>Curly Braces</h1>
      <CurlyBraces />
      <h1 style={{ color: 'red' }}>self Closing Tag</h1>
      <SelfClosingTag />
      <h1 style={{ color: 'red' }}>Varianle in JSX</h1>
      <VariablesInJSX />
    </>
  )
}

export default App
