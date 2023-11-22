export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44'),
	() => import('./nodes/45'),
	() => import('./nodes/46'),
	() => import('./nodes/47'),
	() => import('./nodes/48'),
	() => import('./nodes/49'),
	() => import('./nodes/50'),
	() => import('./nodes/51'),
	() => import('./nodes/52'),
	() => import('./nodes/53'),
	() => import('./nodes/54'),
	() => import('./nodes/55'),
	() => import('./nodes/56'),
	() => import('./nodes/57'),
	() => import('./nodes/58'),
	() => import('./nodes/59'),
	() => import('./nodes/60'),
	() => import('./nodes/61'),
	() => import('./nodes/62'),
	() => import('./nodes/63'),
	() => import('./nodes/64'),
	() => import('./nodes/65'),
	() => import('./nodes/66'),
	() => import('./nodes/67'),
	() => import('./nodes/68'),
	() => import('./nodes/69'),
	() => import('./nodes/70'),
	() => import('./nodes/71'),
	() => import('./nodes/72'),
	() => import('./nodes/73'),
	() => import('./nodes/74'),
	() => import('./nodes/75'),
	() => import('./nodes/76'),
	() => import('./nodes/77'),
	() => import('./nodes/78'),
	() => import('./nodes/79'),
	() => import('./nodes/80'),
	() => import('./nodes/81'),
	() => import('./nodes/82'),
	() => import('./nodes/83'),
	() => import('./nodes/84'),
	() => import('./nodes/85')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Aboutus": [3],
		"/AdventureChallenges": [4],
		"/AreaCalculator": [5],
		"/AstronomyTools": [6],
		"/BasicCalculator": [7],
		"/BasicTechSupport": [8],
		"/BasicTranslator": [9],
		"/BudgetCalculator": [10],
		"/BusinessNameGenerator": [11],
		"/CalorieCounter": [12],
		"/ClicktheButton": [13],
		"/CodingQuiz": [14],
		"/ColorPaletteGenerator": [15],
		"/Contactus": [16],
		"/Countdown": [17],
		"/CurrencyConverter": [18],
		"/DailyBrainTeaser": [19],
		"/DailyFunFact": [20],
		"/Dashdevadmincenter123": [21],
		"/DestinationRecommender": [22],
		"/DigitalCountdownCalendar": [23],
		"/DigitalMathQuiz": [24],
		"/DigitalScienceQuiz": [25],
		"/DigitalWhiteboard": [26],
		"/DummyImageGenerator": [27],
		"/FlashCardMaker": [28],
		"/FractionCalculator": [29],
		"/GeographyQuiz": [30],
		"/HistoryQuiz": [31],
		"/ImageCompressor": [32],
		"/ImageConverter": [33],
		"/ImageResizer": [34],
		"/InteractivePeriodicTable": [35],
		"/JokeoftheDay": [36],
		"/More": [37],
		"/MortgageCalculator": [38],
		"/NameGenerator": [39],
		"/PasswordStrengthChecker": [41],
		"/PositiveAffirmations": [42],
		"/PrecentageCalculator": [43],
		"/QrCodeGenerator": [47],
		"/QuickPollCreator": [48],
		"/QuizIdeaGenerator": [49],
		"/QuizSheild": [50],
		"/RandomCityGenerator": [51],
		"/RandomColorGenerator": [52],
		"/RandomNumberGenerator": [53],
		"/RandomParagraphGenerator": [54],
		"/RandomQuoteGenerator": [55],
		"/RandomRecipeGenerator": [56],
		"/RandomShakespeareanInsultGenerator": [57],
		"/RandomWordGenerator": [58],
		"/RandomWorkouts": [59],
		"/RealorFakeNewsQuiz": [60],
		"/Reportabug": [61],
		"/ScientificCalculator": [62],
		"/ScreenRuler": [63],
		"/SimpleWeatherInfo": [64],
		"/SpaceNews": [66],
		"/SpaceTriviaChallenge": [67],
		"/SpaceandAstronomyFacts": [65],
		"/SquareRootCalculator": [68],
		"/Stopwatch": [69],
		"/StoryPlotGenerator": [70],
		"/TikTacToe": [71],
		"/TimeZoneConverter": [73],
		"/Timer": [72],
		"/TipCalculator": [74],
		"/TitleCapitlization": [75],
		"/TravelBudgetPlanner": [76],
		"/TravelSafetyTips": [77],
		"/TypingSpeedTest": [78],
		"/URLShortener": [79],
		"/VirtualDice": [80],
		"/VolumeCalculator": [81],
		"/Weatherinfo": [82],
		"/WordCounter": [83],
		"/WordFormater": [84],
		"/Worldsslowestloadingwebpage": [85],
		"/passwordgenerator": [40],
		"/privacypolicy": [45],
		"/privacy": [44],
		"/projects": [46]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';