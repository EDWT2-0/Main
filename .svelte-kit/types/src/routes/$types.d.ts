import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/Aboutus" | "/AdventureChallenges" | "/AreaCalculator" | "/AstronomyTools" | "/BasicCalculator" | "/BasicTechSupport" | "/BasicTranslator" | "/BudgetCalculator" | "/CalorieCounter" | "/CodingQuiz" | "/ColorPaletteGenerator" | "/Contactus" | "/Countdown" | "/CriticalThinkingExercises" | "/CurrencyConverter" | "/DailyBrainTeaser" | "/DailyFunFact" | "/DigitalMathQuiz" | "/DigitalScienceQuiz" | "/DummyImageGenerator" | "/FractionCalculator" | "/GeographyQuiz" | "/HealthySnackIdeas" | "/HistoryQuiz" | "/HolidayCountdownCalendar" | "/InteractivePeriodicTable" | "/JokeoftheDay" | "/MemoryGameChallenge" | "/More" | "/MortgageCalculator" | "/NameGenerator" | "/passwordgenerator" | "/PasswordStrengthChecker" | "/PositiveAffirmations" | "/PrecentageCalculator" | "/privacy" | "/privacypolicy" | "/projects" | "/QrCodeGenerator" | "/QuickMeditationSession" | "/QuickPollCreator" | "/QuizIdeaGenerator" | "/QuizSheild" | "/RandomColorGenerator" | "/RandomNameGenerator" | "/RandomNumberGenerator" | "/RandomParagraphGenerator" | "/RandomQuoteGenerator" | "/RandomRecipeGenerator" | "/RandomWordGenerator" | "/RandomWorkouts" | "/Reportabug" | "/ScientificCalculator" | "/ScreenRuler" | "/ShakespeareanInsultGenerator" | "/SpaceandAstronomyFacts" | "/SpaceNews" | "/SpaceTriviaChallenge" | "/SquareRootCalculator" | "/Stopwatch" | "/StoryPlotGenerator" | "/Testhomepage" | "/TikTacToe" | "/Timer" | "/Timer&StopWatch" | "/TimeZoneConverter" | "/TipCalculator" | "/TitleCapitlization" | "/TravelBudgetPlanner" | "/TravelSafetyTips" | "/TypingSpeedTest" | "/URLShortener" | "/UsefulExtentions" | "/VirtualDice" | "/VolumeCalculator" | "/Weatherinfo" | "/WordCounter" | "/WordFormater" | "/Worldsslowestloadingwebpage" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;