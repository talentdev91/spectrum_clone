const ga = window.ga;

export const set = uid => {
  /**
	* 
	* This get sets on login or on authentication. This helps us track the UID in GA
	* which will allow for us to have more meaningful understanding of future experiments
	*
	*/

  ga('set', 'userId', uid); // Set the user ID using signed-in user_id.
};

export const track = (category, action, label) => {
  /**
  *
  *	Category: the object interacted with (user, frequency, story, message, etc)
  * Action: the type of interaction (sign out, joined frequency, published story, sent message, etc)
  * Label: used to organize events (experiment variant A vs B)

  * Proposal: Label is reserved for A/B tests, as 'category' and 'action' are enough together to capture
  * most other event tracking. Without an A/B test, leave the third arg blank or null.

  * Style guide:
  * * lowercase
  * * spaces between words
  * * past-tense (i.e. created vs create, signed out vs sign out)
  * * action should attempt to be past tense of the function it is called in, for clarity
  * * * e.g. closeModal() => track('modal', 'closed', null)
  * * * e.g. sendMessage() => track('message', 'sent', null)

	* Some examples:
	* track('user', 'signed out') => User category, sign out action
	* track('frequency', 'created') => User category, sign out action
	* track('story', 'deleted') => User category, sign out action

  */

  ga('send', 'event', category, action, label);
};
