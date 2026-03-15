import './App.css';

export default function App() {
  const structure = [
    { name: 'index.html', description: 'მთავარი HTML ფაილი, სადაც React root ელემენტი (<div id="root">) მდებარეობს' },
    { name: 'main.jsx', description: 'JavaScript ფაილი, რომელიც mount-ს აკეთებს React აპს DOM-ში' },
    { name: 'App.jsx', description: 'მთავარი React კომპონენტი, სადაც შენი UI ლოგიკა იწყება' },
    { name: 'App.css', description: 'სტილები App.jsx-ისთვის' },
    { name: 'assets/', description: 'სურათები, ლოგოები და სხვა მედია ფაილები' },
    { name: 'vite.config.js', description: 'Vite-ის კონფიგურაცია (მაგ. plugins, aliases)' },
    { name: 'package.json', description: 'პროექტის კონფიგურაცია, dependencies და scripts' },
    { name: 'node_modules/', description: 'ყველა ინსტალირებული პაკეტი, რაც npm install-ით მოდის' },
    { name: '.gitignore', description: 'ფაილები, რომლებიც Git-ით არ უნდა აიტვირთოს (მაგ. node_modules)' },
    { name: 'npm', description: 'Node Package Manager — ინსტრუმენტი, რომელიც გამოიყენება JavaScript პაკეტების დასამატებლად და პროექტის მართვისთვის' },
    { name: 'react', description: 'npm ნიშნავს Node Package Manager — ეს არის ინსტრუმენტი, რომელიც გამოიყენება JavaScript პროექტებში ბიბლიოთეკების დასამატებლად, გასაშვებად და სამართავად.' }
  ];


  console.log("Lomi, WolIki")
  return (
    <div className="app">
      <h1>📁 React/Vite პროექტის სტრუქტურა</h1>
      <table>
        <thead>
          <tr>
            <th>ფაილი/ფოლდერი/სხვა</th>
            <th>განმარტება</th>
          </tr>
        </thead>
        <tbody>
          {structure.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
