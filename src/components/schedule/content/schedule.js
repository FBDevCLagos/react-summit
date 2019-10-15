const shared = [
   {
      time: "9:00 am - 9:45 am",
      title: "Breakfast"
   },
   {
      time: "9:45 am - 10:00 am",
      title: "Opening Address: The evolution of React JS",
      anchor: "Innocent Amadi"
   },
   {
      time: "10:00 am – 10:40 pm",
      type: "Keynote",
      title: "JavaScript build systems",
      anchor: "Miguel Jimenez "
   },
   {
      time: "12:00 pm - 1:00 pm",
      title: "Lunch"
   },
   {
      time: "4:00 pm - 4:15 pm",
      title: "Group photos/Swags sharing"
   }
];

const beginner = [
   {
      time: "11:00 am – 11:30 am",
      title: "Thinking in React - Breaking down complex UIs into simple components",
      type: "Presentation",
      anchor: "Chineze Nwosu"
   },
   {
      time: "11:30 am - 12:00 pm",
      title: "Optimizing your use of React LifeCycles - When, Why, How",
      type: "Presentation",
      anchor: "Shedrack Akintayo"
   },
   {
      time: "1:00 pm - 2:00 pm",
      title: "10 things every React beginner should know.",
      type: "Presentation",
      anchor: "Timi Aiyemo"
   },
   {
      time: "2:00 pm - 2:30 pm",
      title: "React Testing Guide",
      type: "Presentation",
      anchor: "Ugonna Ofoegbu"
   },
   {
      time: "2:30 pm - 3:00 pm",
      title: "Create React App is your best friend.",
      type: "Presentation",
      anchor: "Adewale Abati"
   },
   {
      time: "3:00 pm - 4:00 pm",
      title: "Moving from localhost to www: Deploying React Apps to Production",
      type: "Workshop",
      anchor: "Chidiebere Joshua"
   }
];

const advanced = [
   {
      time: "11:00 am – 11:30 am",
      title: "Serverless React",
      type: "Presentation",
      anchor: "Temi Lajumoke"
   },
   {
      time: "11:30 am - 12:00 pm",
      title: "React with Typescript: The why's and how",
      type: "Presentation",
      anchor: "Kesiena Akpobome"
   },
   {
      time: "1:00 pm - 2:00 pm",
      title: "Advanced React Patterns",
      type: "Presentation",
      anchor: "Kent C Dodds"
   },
   {
      time: "2:00 pm - 2:30 pm",
      title: "Practical steps to turn React web apps into desktop apps using Electron",
      type: "Presentation",
      anchor: "Fiyinfoluwa Adebayo"
   },
   {
      time: "2:30 pm - 3:00 pm",
      title: "Responsive Images for React Apps",
      type: "Workshop",
      anchor: "Christian Nwamba "
   },
   {
      time: "3:00 pm - 4:00 pm",
      title: "An introduction to Machine Learning with React and Tensorflow JS",
      type: "Presentation",
      anchor: "Robert John"
   }
];

export default {
   events: {
      shared,
      beginner,
      advanced
   }
};
