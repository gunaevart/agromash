


obj = {
    'name':'victot',
    'age':'21',
    'pol':'m',
    'phine':789987,
}

all_users = []
for i in range(0, 3):
    all_users.append(obj.copy())
for i in all_users:
    print(i)

all_users[1]['name'] = 'vova'
all_users[1]['age'] = 33


print('____________________')

for i in all_users:
    print(i)