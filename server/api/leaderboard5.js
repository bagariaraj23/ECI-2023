const getData = async (req, res) => {
  const data = await fetch(
    "https://mocki.io/v1/0614ac1f-e394-408b-b35b-cec5babb5498",
    {
      method: "GET",
    }
  );
  const json = await data.json();

  const groupedData = json.reduce((acc, curr) => {
    const { constituencyNo, voterID } = curr;
    if (!acc[constituencyNo]) {
      acc[constituencyNo] = [voterID];
    } else {
      acc[constituencyNo].push(voterID);
    }
    return acc;
  }, {});

  const sortedData = Object.entries(groupedData)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 5);

  const [top1, top2, top3, top4, top5] = sortedData;
  console.log("Top 5 constituencies with the most voter IDs:");
  console.log("1. Constituency", top1[0], ":", top1[1].length, "voter IDs");
  console.log("2. Constituency", top2[0], ":", top2[1].length, "voter IDs");
  console.log("3. Constituency", top3[0], ":", top3[1].length, "voter IDs");
  console.log("4. Constituency", top4[0], ":", top4[1].length, "voter IDs");
  console.log("5. Constituency", top5[0], ":", top5[1].length, "voter IDs");
};

getData();
