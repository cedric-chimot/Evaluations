let eleves =[
    {nom:  "Benoit",
     present: 1},
    {nom:" Zakaria",
     present: 2},
    {nom: " Camille",
     present: 1},
    {nom:" Greg",
    present: 1 },
    {nom:" AbdelHamid",
    present: 0 },
    {nom: " Théo",
    present: 0 },
    {nom:" Anthony",
    present: 1},
    {nom:" Cédric",
     present: 1 },
    {nom: " Pérrine",
     present: 1 },
    {nom: " Fred",
     present: 1 },
    {nom:" Halim",
    present: 1 },
    {nom:" Stéphane",
    present: 1 },
    {nom:" Othman",
    present: 2 }
]
    eleves.push({nom: "Jimmy" , present: 1})
    
for (let i = 0; i < eleves.length; i++ ) {
    let eleve = ( eleves[i] )
    document.write("<br\>")
    if ( eleve.present ==0 ) {
   console.log( eleve.nom + " est absent.") 
   document.write( eleve.nom + " est absent."+"<br\>")
    }
   else {  
    
   console.log(eleve.nom + " est présent.") 
   document.write(eleve.nom + " est présent."+"<br\>")
   }
   if ( eleve.present >1) {
    console.log(eleve.nom +" est présent mais est arrivé en retard.")
    document.write( " mais est arrivé en retard."+"<br\>")}
  }
 
