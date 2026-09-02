export type BlogGuide = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  read: string;
};

const images = [
  "/images/tableware-product.png",
  "/images/chairs-product.png",
  "/images/marquee-product.png",
  "/images/warehouse-team.png",
  "/images/lighting-product.png",
  "/images/hero-event.png",
  "/images/tables-product.png",
  "/images/decor-product.png",
];

const categoryArticles: Record<string, Array<[string,string,string]>> = {
  "Planning basics": [
    ["eight-week-event-checklist","Your practical 8-week event checklist","A week-by-week plan for confirming the venue, guest numbers, hire products, suppliers, access and final event-day details."],
    ["event-hire-budget","How to build a realistic event-hire budget","Separate essential equipment, optional styling, labour, transport and contingency so the budget remains useful throughout planning."],
    ["event-hire-timeline","The event-hire timeline from enquiry to collection","Understand when to enquire, approve quantities, confirm access, make payments and prepare products for collection."],
    ["guest-count-planning","Why an accurate guest count changes everything","Use confirmed, invited and expected attendance figures correctly when calculating furniture, tableware, shelter and service requirements."],
    ["supplier-brief","How to write a clear event supplier brief","Give suppliers the dates, venue facts, quantities, responsibilities and decision deadlines they need to quote and deliver accurately."],
    ["final-week-checklist","Your final-week event readiness checklist","Reconfirm contacts, access, weather decisions, floor plans, supplier times and responsibilities before the event begins."],
  ],
  "Tables & chairs": [
    ["how-many-tables-and-chairs","How many tables and chairs do I need?","Calculate seating and table quantities for ceremonies, seated dining and cocktail layouts without crowding guests or service routes."],
    ["choose-event-chair","How to choose the right chair for your event","Compare dining, ceremony, folding, bar and lounge seating by comfort, finish, placement, handling and venue suitability."],
    ["round-vs-rectangle-tables","Round or rectangular tables: which layout works best?","Compare capacity, conversation, centrepieces, room shape and service paths before selecting a table format."],
    ["long-table-dinner","Planning a comfortable long-table dinner","Balance table widths, place settings, centrepieces, shared dishes, chair clearance and waiter access for an inviting meal."],
    ["cocktail-layout","Cocktail-event furniture quantities explained","Plan bar tables, stools, lounge seats and resting points so a standing event still feels comfortable and accessible."],
    ["chair-spacing-accessibility","Chair spacing, aisles and accessible seating","Protect movement routes, wheelchair positions, emergency access and guest comfort with practical chair and aisle spacing."],
  ],
  "Marquees": [
    ["choose-marquee-size","Choosing the right marquee size","Calculate a comfortable footprint from guest count, dining style, dance floor, service zones and wet-weather requirements."],
    ["marquee-site-check","What to check before a marquee site visit","Review ground conditions, slope, underground services, access, wind exposure, drainage and installation space before quoting."],
    ["marquee-flooring","Do you need flooring under your marquee?","Compare bare ground, protective flooring and finished event floors for stability, drainage, comfort and appearance."],
    ["marquee-walls-weather","Marquee walls, entrances and weather protection","Plan wall placement, openings, ventilation and protected access without making the structure uncomfortable or difficult to serve."],
    ["marquee-lighting-power","Lighting and power inside a marquee","Map practical and decorative lighting, cable routes, supply capacity and emergency illumination before installation."],
    ["marquee-access-layout","Marquee access and internal layout planning","Coordinate entrances, catering, furniture, dance floor, staging and accessible routes within the approved structure."],
  ],
  "Delivery & setup": [
    ["delivery-day","What happens on delivery day?","Understand arrival windows, unloading, placement, condition checks, setup boundaries and the customer handover process."],
    ["venue-access-checklist","The venue-access checklist for smooth delivery","Confirm loading zones, lifts, stairs, door widths, surfaces, parking rules and venue contacts before the truck arrives."],
    ["delivery-window","How to choose a practical delivery window","Allow enough time for unloading, installation, supplier sequencing, venue restrictions and final presentation checks."],
    ["setup-packdown","Setup and pack-down responsibilities explained","Clarify what the hire team places, what other suppliers complete and how products should be prepared after the event."],
    ["customer-collection","Collecting event-hire products yourself","Choose a suitable vehicle, restraints, protective materials and loading appointment for eligible customer-collection orders."],
    ["return-preparation","How to prepare hired items for return","Count, clean, separate and safely stage products so collection is efficient and the return condition is easy to confirm."],
  ],
  "Lighting": [
    ["layer-event-lighting","How to layer event lighting after sunset","Combine practical, ambient and feature lighting to create atmosphere while protecting entrances, paths and service areas."],
    ["festoon-lighting-plan","Planning festoon lighting for an outdoor event","Calculate spans, anchor points, mounting height, power routes and weather exposure before choosing festoon quantities."],
    ["dining-table-lighting","Lighting a dining layout without glare","Position warm light so guests can see food and faces while photography, centrepieces and sightlines remain comfortable."],
    ["ceremony-lighting","Ceremony lighting for late-afternoon events","Plan the transition from daylight to evening across the aisle, signing area, portraits and guest exits."],
    ["event-power-safety","Event lighting power and cable safety","Confirm supply capacity, weather protection, tested equipment and protected cable routes with qualified providers."],
    ["lighting-colour-temperature","Choosing warm or cool light for your event","Use colour temperature consistently across décor, photography, dining and functional areas for a cohesive result."],
  ],
  "Weather": [
    ["winter-celebration","A warmer, safer winter celebration","Plan heating, weather cover, flooring, lighting and safe circulation so guests stay comfortable after sunset."],
    ["wet-weather-plan","How to create a useful wet-weather plan","Set decision times, backup layouts, covered routes and supplier responsibilities before rain becomes an emergency."],
    ["hot-weather-event","Planning an event in hot weather","Provide shade, airflow, hydration, food protection and sensible timing while monitoring heat and fire restrictions."],
    ["wind-outdoor-event","Wind planning for outdoor furniture and décor","Assess exposure, anchoring, lightweight items, signage and the point when the outdoor plan must change."],
    ["rain-ground-conditions","Rain, drainage and ground-condition checks","Protect structures, flooring, vehicles and guest paths by checking slope, pooling, soft ground and recovery time."],
    ["weather-decision-timeline","When to make the final weather decision","Create staged checkpoints with the venue and suppliers so changes remain safe, affordable and achievable."],
  ],
  "Venues": [
    ["venue-site-visit","What to record during an event venue site visit","Capture measurements, access, power, surfaces, loading rules, supplier spaces and venue restrictions in one useful record."],
    ["venue-floor-plan","How to turn a venue floor plan into a hire list","Translate room measurements and event zones into furniture quantities, clearances, staging and practical service routes."],
    ["heritage-venue-access","Planning hire equipment for a heritage venue","Protect restricted surfaces and work around narrow access, limited fixing points, noise rules and strict delivery windows."],
    ["home-event-venue","Hosting an event at home","Assess access, power, bathrooms, neighbours, weather cover, waste and the effect of delivery vehicles on the property."],
    ["regional-venue-logistics","Regional venue logistics and transport planning","Allow for travel, crew time, accommodation, backup stock, communication limits and longer recovery windows."],
    ["venue-coordinator-questions","Questions to ask your venue coordinator","Confirm inclusions, furniture rules, loading, access times, power, cleaning, security and supplier approvals before booking hire."],
  ],
  "Guest experience": [
    ["guest-arrival-flow","Designing a calm guest-arrival experience","Connect parking, signage, welcome points, shelter and seating so guests understand where to go from the moment they arrive."],
    ["accessible-event-layout","Creating a more accessible event layout","Plan step-free routes, suitable seating, clear widths, accessible facilities and helpful wayfinding from arrival to departure."],
    ["guest-comfort-seating","Guest comfort beyond the dining chair","Provide rest points, shade, heating, quiet zones and flexible seating for different ages, needs and event durations."],
    ["event-wayfinding","Simple wayfinding that improves the event","Use consistent signs, lighting and visible landmarks to connect entrances, amenities, dining and activity zones."],
    ["queue-service-layout","Reducing queues at bars, buffets and amenities","Position service points, tables and circulation routes to prevent bottlenecks and keep staff movement separate from guest lines."],
    ["guest-exit-plan","Planning a smooth end-of-event departure","Coordinate lighting, transport, coat collection, accessibility, supplier pack-down and safe movement after the final activity."],
  ],
};

export const blogCategories = Object.keys(categoryArticles);

export const blogGuides: BlogGuide[] = blogCategories.flatMap((category,categoryIndex)=>
  categoryArticles[category].map((article,index)=>({
    slug: article[0],
    title: article[1],
    summary: article[2],
    category,
    image: images[(categoryIndex+index)%images.length],
    read: `${5+((categoryIndex+index)%5)} min read`,
  }))
);

export const articleSections: Record<string,Array<[string,string]>> = {
  "Planning basics": [
    ["Define the event before choosing products","Write down the event format, confirmed date, guest range, venue and the experience you want guests to have. This prevents early product choices from becoming disconnected from the practical brief."],
    ["Separate confirmed facts from assumptions","Mark each detail as confirmed, provisional or unknown. Suppliers can then price accurately, highlight dependencies and explain which decisions must be made before stock or labour can be secured."],
    ["Build one shared timeline","Connect venue deadlines, supplier approvals, payments, access windows and final quantities. A single timeline reduces duplicated work and makes responsibility for the next action visible."],
    ["Keep a realistic contingency","Allow time and budget for guest changes, weather decisions, access restrictions and substitutions. Contingency should be planned deliberately rather than treated as unused money."],
    ["Confirm responsibilities in writing","Record who supplies, installs, powers, moves and returns every important item. Written boundaries protect the customer, venue and suppliers from event-day misunderstandings."],
    ["Complete a final readiness review","Recheck contacts, dates, quantities, access, weather and payment status before dispatch. Final confirmation should refer to the current approved quotation and floor plan."],
  ],
  "Tables & chairs": [
    ["Start with the guest and event format","Ceremony, dining, cocktail and lounge zones use furniture differently. Calculate each zone separately and identify whether furniture will be moved or must remain in place."],
    ["Match quantities to real capacity","Use the manufacturer’s capacity and the chosen place-setting width rather than an optimistic room maximum. Include accessible positions, supplier seats and realistic attendance changes."],
    ["Protect aisles and service routes","Allow guests and staff to move without pulling chairs into circulation paths. Keep exits, accessible routes and catering movement clear throughout the event."],
    ["Coordinate dimensions and finishes","Check chair width, table footprint, linen drop and centrepiece space as one system. Products that look compatible online may require different clearances in the venue."],
    ["Plan transitions between event zones","If ceremony chairs move to dining, confirm the crew, timing and temporary storage area. Avoid relying on guests to move heavy or stacked hire equipment."],
    ["Approve a measured floor plan","Place the final product dimensions on a scaled plan and confirm it with the venue. The approved plan becomes the reference for quantities, placement and setup."],
  ],
  "Marquees": [
    ["Confirm the usable site area","Measure the level installation area, not only the available property boundary. Include stakes or ballast, vehicle access, drainage, overhead clearance and protected exits."],
    ["Calculate every internal zone","Dining, bars, dance floors, stages, catering and circulation all consume footprint. Start with these uses before choosing a nominal marquee size."],
    ["Review ground and weather exposure","Slope, soil, underground services, wind and water movement affect the structure and flooring solution. A site inspection may be required before a firm quotation."],
    ["Coordinate walls, doors and ventilation","Walling protects against weather but changes airflow, temperature and access. Plan openings around prevailing conditions and the guest journey."],
    ["Plan installation and dismantling","Reserve clear access and sufficient time for trained installers. Keep other suppliers outside the work zone until the structure is formally handed over."],
    ["Confirm compliance and responsibility","Use approved equipment and competent installers. Document permits, engineering, emergency access and the person authorised to respond if conditions change."],
  ],
  "Delivery & setup": [
    ["Confirm the exact service address","Provide the venue name, street access, loading entrance and on-site contact. The public entrance is often not the correct location for event deliveries."],
    ["Measure the access route","Record door widths, lifts, stairs, surfaces, carry distance and height restrictions. These details determine vehicle choice, crew needs and realistic unloading time."],
    ["Sequence all suppliers","Give each supplier a workable arrival window and protect shared loading areas. Installation should follow a coordinated order rather than simultaneous arrival."],
    ["Define the setup boundary","Confirm whether the service includes unloading, placement, assembly, styling or pack-down. Optional labour must be approved before dispatch."],
    ["Complete a customer handover","Count visible items, record condition and review collection preparation with the authorised customer or venue contact before the crew leaves."],
    ["Prepare for efficient collection","Remove personal items, separate hired products and preserve access. Late pack-down or blocked loading areas can affect labour time and collection schedules."],
  ],
  "Lighting": [
    ["Map functional light first","Entrances, stairs, paths, food service and work areas need reliable visibility before decorative lighting is added. Functional light should not depend on a single decorative circuit."],
    ["Build the atmosphere in layers","Combine overhead, table-level and feature lighting. Layering provides depth and allows the mood to change without leaving important areas dark."],
    ["Confirm power and cable routes","Document supply capacity, connection locations, weather protection and protected cable paths. Electrical work must be completed by appropriately qualified providers."],
    ["Choose a consistent colour temperature","Warm and cool sources can look disconnected in photography and décor. Select a dominant temperature and test key surfaces before the event."],
    ["Control glare and spill","Position fittings so guests, neighbours, drivers and photographers are not looking directly into bright sources. Adjust angles after furniture is placed."],
    ["Test the completed scene after dark","A daytime installation cannot fully confirm the night result. Complete a functional test and final focus once ambient light has reduced."],
  ],
  "Weather": [
    ["Use reliable local forecasts","Review more than a single app and monitor the venue’s actual conditions. Wind, ground saturation, heat and lightning can matter as much as rain probability."],
    ["Set decision points in advance","Agree when the wet-weather or heat plan will be activated and who can make the decision. Late changes may no longer be safe or operationally possible."],
    ["Protect the full guest journey","Cover arrival, queues, amenities and departure—not only the main event space. Connect shelters with stable, illuminated paths."],
    ["Adjust equipment and layout","Weather may require walls, flooring, ballast, shade, heating or a smaller protected layout. Only approved products should be used for the expected conditions."],
    ["Communicate changes clearly","Tell guests, the venue and every supplier what changed, when access starts and which plan is current. Remove outdated floor plans from circulation."],
    ["Keep safety ahead of appearance","Pause or change the event when conditions exceed safe operating limits. No visual plan should override supplier instructions or venue safety requirements."],
  ],
  "Venues": [
    ["Record accurate room dimensions","Measure usable floor area, ceiling heights, fixed furniture and columns. Venue capacity alone does not describe the layout available for your event."],
    ["Trace the supplier access path","Walk from the loading point to every setup zone. Photograph turns, lifts, stairs, surfaces and restrictions that affect equipment handling."],
    ["Confirm venue rules early","Ask about approved suppliers, floor protection, noise, fixing methods, power, cleaning and access times before placing non-refundable orders."],
    ["Map guest and service circulation","Separate arrivals, dining, toilets and emergency paths from catering and supplier movement wherever the venue permits."],
    ["Identify included equipment","Inspect the venue’s tables, chairs, lighting and staging rather than relying on a list. Confirm quantities, condition and responsibility for placement."],
    ["Share one approved venue plan","The venue, customer and suppliers should work from the same dated plan. Record later changes and obtain approval before installation."],
  ],
  "Guest experience": [
    ["Plan from the guest’s point of view","Walk through arrival, welcome, seating, food, activities, amenities and departure. Note where information, shelter or a resting point is missing."],
    ["Design for different needs","Provide step-free routes, accessible seating, clear widths, quiet options and visible assistance. Accessibility should be integrated into the main layout."],
    ["Reduce uncertainty with wayfinding","Use concise, consistent signs supported by lighting and visible landmarks. Guests should not need staff assistance for every basic movement."],
    ["Balance energy and comfort","Mix active social zones with places to sit, talk and recover. Consider temperature, sound, lighting and event duration for different age groups."],
    ["Prevent queues and bottlenecks","Distribute service points and protect circulation around bars, buffets, entrances and amenities. Observe where lines will form, not only where counters fit."],
    ["Finish with a clear departure plan","Keep exits illuminated and accessible, coordinate transport information and delay supplier pack-down until guest movement is safe."],
  ],
};
