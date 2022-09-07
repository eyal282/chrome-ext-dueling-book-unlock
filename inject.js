window.findCard = function(arr, hand, grave, like)
{
	var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
	if (hand)
	{
		for (var k = 0; k < player1.hand_arr.length; k++)
		{
			cards.push(player1.hand_arr[k]);
		}
	}
	if (grave)
	{
		for (k = 0; k < player1.grave_arr.length; k++)
		{
			cards.push(player1.grave_arr[k]);
		}
	}
	for (var i = 0; i < arr.length;i ++)
	{
		if(arr[i] == "Question")
		{
			for (var j = 0; j < cards.length; j++)
			{
				if (cards[j])
				{
					if (cards[j].data("face_down")) // Don't block GY viewing if someone set "Question"
					{
						continue;
					}
					//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
					if (!(cards[j].data("cardfront").data("treated_as") == arr[i] || like && cards[j].data("cardfront").data("treated_as") && cards[j].data("cardfront").data("treated_as").indexOf(arr[i]) >= 0))
					{
						return false;
					}
				}
			}
		}
	}
	return true;
}