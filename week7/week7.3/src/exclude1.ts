type Event = "click" | "scroll" | "mosuemove";
type ExcludeEvent = Exclude<Event, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click");
