const findTheOldest = function(arr) {
  const oldest = arr
    .sort((a, b) => {
      const age1 = getAge(a.yearOfBirth, a.yearOfDeath);
      const age2 = getAge(b.yearOfBirth, b.yearOfDeath);
      return age1 - age2;
    });

  return oldest[oldest.length - 1];
};

const getAge = (birth, death) => {
  if (!death){
    death = (new Date()).getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
