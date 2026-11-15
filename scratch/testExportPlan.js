// Test export plans logic
import { buildSlidePlan } from "../src/utils/exportPoemImage.js";

// Mock canvas context for Node environment
class MockCanvasRenderingContext2D {
  constructor() {
    this.font = "";
  }
  measureText(text) {
    // Estimate width based on character count and approximate font size
    const match = this.font.match(/(\d+)px/);
    const size = match ? parseInt(match[1], 10) : 20;
    return { width: (text ? text.length : 0) * (size * 0.52) };
  }
}

const mockCtx = new MockCanvasRenderingContext2D();

// Test 1: Short Poem
const shortPoem = {
  name: "Whispers of Dawn",
  intro: "A brief waking thought before the frost.",
  author: "Poet",
  contents: `The dawn enters softly through glass,
leaving dew where darkness lingered.
A silent prayer for light.`
};

const shortPlan = buildSlidePlan(shortPoem, "post", mockCtx);
console.log("=== SHORT POEM (Post) ===");
console.log("slideCount:", shortPlan.slideCount);
console.log("isMultiSlide:", shortPlan.isMultiSlide);
console.log("slides length:", shortPlan.slides.length);
console.log("slides[0].isCover:", shortPlan.slides[0].isCover);
console.log("slides[0].slideNumber:", shortPlan.slides[0].slideNumber);

// Test 2: Long Poem
const longPoem = {
  name: "The Anatomy of Solitude",
  intro: "On days when twilight refuses to yield to morning.",
  author: "Rahul",
  contents: `I have walked through gardens where winter
took root in the marrow of every bough.
The petals did not fall; they calcified,
monuments to a warmth that surrendered too early.

We spoke once in the language of thresholds,
neither arriving nor turning away,
our silhouettes folded into the seam
where paper meets ink in an unread ledger.

Now the dusk gathers its cold inheritance.
Every mirror reflects an empty corridor,
every whisper bends toward the floorboards
waiting for the weight of steps long forgotten.

If there is forgiveness in the frost,
let it be quiet as the closing of a tomb.
Let it remember the green that was,
even as the snow erases the boundary of the lawn.

Let the silence take what speech could not keep:
the tremor in the hands,
the shadow under the lamp,
the gardenia withering upon the sill.`
};

const longPlan = buildSlidePlan(longPoem, "post", mockCtx);
console.log("\n=== LONG POEM (Post) ===");
console.log("slideCount:", longPlan.slideCount);
console.log("isMultiSlide:", longPlan.isMultiSlide);
console.log("slides length:", longPlan.slides.length);
longPlan.slides.forEach((s, idx) => {
  console.log(`Slide ${idx + 1}: isCover=${s.isCover}, slideNumber=${s.slideNumber}, totalSlides=${s.totalSlides}, stanzasCount=${s.stanzas.length}`);
});

const storyLongPlan = buildSlidePlan(longPoem, "story", mockCtx);
console.log("\n=== LONG POEM (Story) ===");
console.log("slideCount:", storyLongPlan.slideCount);
console.log("isMultiSlide:", storyLongPlan.isMultiSlide);
storyLongPlan.slides.forEach((s, idx) => {
  console.log(`Slide ${idx + 1}: isCover=${s.isCover}, slideNumber=${s.slideNumber}, totalSlides=${s.totalSlides}, stanzasCount=${s.stanzas.length}`);
});

