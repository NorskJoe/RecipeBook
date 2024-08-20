import { MethodItem } from "./Method.models";
import styles from "./Method.module.scss";

interface MethodProps {
  steps: MethodItem[];
}

const Method = ({ steps: steps }: MethodProps) => {
  steps = [
    {
      instructions:
        "Whisk 2.5 cups of warm water with the honey and yeast.  Let sit for 5 minutes",
    },
    {
      instructions: "Add the flour and salt and mix into a rough shaggy dough",
    },
    {
      instructions:
        "Pour 4tbsp of olive oil into a large bowl and transfer the dough into it.  Cover with cling film and let it rise in the fridge for 8 hours",
    },
    {
      instructions:
        "Generously butter your baking dish. And pout 1tbsp of oil into the center",
    },
    {
      instructions:
        "Once the dough has risen and is looking bubbly.  Fold the edge of the dough into the centre, rotate 45 degrees and repeat several times to deflate the dough.",
    },
    {
      instructions:
        "Transfer the dough to the prepared baking dish and let it rise in a warm spot for 1-4 hours.",
    },
    {
      instructions:
        "Poke dimples into the dough using your fingers.  Sprinkle some sea salt over the top",
    },
    {
      instructions:
        "Place into pre-heated oven at 200C and bake for 20-30 minutes.",
    },
    {
      instructions:
        "Meanwhile, finely chop or grate the garlic and combine with butter in a pan on low heat.  When the bread has approximately 10 minutes left, remove from oven and brush this garlic butter over the top.  Then return to the oven.",
    },
  ];
  return (
    <div className="container text-start my-5">
      <h2 className="text-center">Method</h2>
      <ul className="list-group list-group-numbered list-group-flush my-4">
        {steps.map((step, index) => (
          <li
            className={`list-group-item fs-5 py-4 ${styles.listItem}`}
            key={index}
          >
            {step.instructions}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Method;
