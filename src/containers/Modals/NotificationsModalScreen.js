import React from 'react';
import { ScrollView } from 'react-native';
import { Notification } from "../../components";

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const tmp_notifications = [{"id":1,"text":text,"checked":true},{"id":2,"text":text,"checked":true},{"id":3,"text":text,"checked":true},{"id":4,"text":text,"checked":true},{"id":5,"text":text,"checked":false},{"id":6,"text":text,"checked":true},{"id":7,"text":text,"checked":false},{"id":8,"text":text,"checked":false},{"id":9,"text":text,"checked":false},{"id":10,"text":text,"checked":false},{"id":11,"text":text,"checked":false},{"id":12,"text":text,"checked":false},{"id":13,"text":text,"checked":false},{"id":14,"text":text,"checked":false},{"id":15,"text":text,"checked":false},{"id":16,"text":text,"checked":true},{"id":17,"text":text,"checked":false},{"id":18,"text":text,"checked":true},{"id":19,"text":text,"checked":true},{"id":20,"text":text,"checked":true},{"id":21,"text":text,"checked":true},{"id":22,"text":text,"checked":false},{"id":23,"text":text,"checked":true},{"id":24,"text":text,"checked":false},{"id":25,"text":text,"checked":true},{"id":26,"text":text,"checked":true},{"id":27,"text":text,"checked":true},{"id":28,"text":text,"checked":false},{"id":29,"text":text,"checked":false},{"id":30,"text":text,"checked":false},{"id":31,"text":text,"checked":true},{"id":32,"text":text,"checked":false},{"id":33,"text":text,"checked":false},{"id":34,"text":text,"checked":false},{"id":35,"text":text,"checked":false},{"id":36,"text":text,"checked":true},{"id":37,"text":text,"checked":true},{"id":38,"text":text,"checked":true},{"id":39,"text":text,"checked":true},{"id":40,"text":text,"checked":false},{"id":41,"text":text,"checked":true},{"id":42,"text":text,"checked":false},{"id":43,"text":text,"checked":true},{"id":44,"text":text,"checked":true},{"id":45,"text":text,"checked":false},{"id":46,"text":text,"checked":true},{"id":47,"text":text,"checked":true},{"id":48,"text":text,"checked":false},{"id":49,"text":text,"checked":false},{"id":50,"text":text,"checked":false},{"id":51,"text":text,"checked":false},{"id":52,"text":text,"checked":false},{"id":53,"text":text,"checked":false},{"id":54,"text":text,"checked":true},{"id":55,"text":text,"checked":true},{"id":56,"text":text,"checked":true},{"id":57,"text":text,"checked":true},{"id":58,"text":text,"checked":true},{"id":59,"text":text,"checked":false},{"id":60,"text":text,"checked":false},{"id":61,"text":text,"checked":true},{"id":62,"text":text,"checked":true},{"id":63,"text":text,"checked":true},{"id":64,"text":text,"checked":true},{"id":65,"text":text,"checked":true},{"id":66,"text":text,"checked":false},{"id":67,"text":text,"checked":true},{"id":68,"text":text,"checked":true},{"id":69,"text":text,"checked":true},{"id":70,"text":text,"checked":true},{"id":71,"text":text,"checked":false},{"id":72,"text":text,"checked":true},{"id":73,"text":text,"checked":true},{"id":74,"text":text,"checked":true},{"id":75,"text":text,"checked":true},{"id":76,"text":text,"checked":true},{"id":77,"text":text,"checked":true},{"id":78,"text":text,"checked":false},{"id":79,"text":text,"checked":false},{"id":80,"text":text,"checked":false},{"id":81,"text":text,"checked":false},{"id":82,"text":text,"checked":true},{"id":83,"text":text,"checked":true},{"id":84,"text":text,"checked":false},{"id":85,"text":text,"checked":false}];

export const NotificationsModalScreen = (props) => {
	const [checkedItems, setCheckedItems] = React.useState({});
	React.useEffect(() => {
		setCheckedItems(
			tmp_notifications
			.map(item => ({ id: item.id, checked: item.checked }))
			.reduce((result, current) => {
				result[current.id] = current.checked;
				return result;
			}, {})
		)
	}, []);
	return (
		<ScrollView stylee={{ flex: 1 }}>
			{
				tmp_notifications.map(({ id, text }) =>
					<Notification
						key={id}
						checked={checkedItems[id]}
						from={`from ${id}`}
						text={text}
						onPress={() => setCheckedItems({
							...checkedItems,
							[id]: !checkedItems[id]
						})} />
				)
			}
		</ScrollView>
	)
};
