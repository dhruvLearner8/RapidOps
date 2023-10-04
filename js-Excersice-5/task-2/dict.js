const namesArray = [
    'Ashish Shah',
    'Rashmin Chhatrala',
    'Yash Dubey',
    'Prakash Jain',
    'Yashraj Singh',
    'Viraj Sinha',
    'Rajesh Kumar',
    'Mahesh Marwadi',
    'Suresh Sahni',
    'Amar Vilas',
    'Virdas Singhania',
    'Rajeshwari Bindra',
    'Birendra Bhalerao',
    'Virendra Bhupati',
    'Bhupendra Singh',
    'Bhuvam Bam',
    'Shri Raj',
    'Prashant Kamle',
    'Kamlesh Tomar',
    'Risabh Khare',
    'Rishi Kohli',
    'Kunwar Kharwanda',
    'Kartik Koli',
    'Komal Jain',
    'Kartikey Pandey'
  ];

  
const searchInput = document.getElementById('searchInput');
const namesList = document.getElementById('namesList');

searchInput.addEventListener('input', handleSearch);

function handleSearch() {
  const searchQuery = searchInput.value.toLowerCase();
  let resultsHtml = '';

  namesArray.forEach((name) => {
    const lowerCaseName = name.toLowerCase();
    if (lowerCaseName.includes(searchQuery)) {
      const highlightedName = name.replace(
        new RegExp(searchQuery, 'gi'),
        (match) => `<span class="highlight">${match}</span>`
      );
      resultsHtml += `<li>${highlightedName}</li>`;
    }
  });

  namesList.innerHTML = resultsHtml;
}