class VendingMachine:
    product = ""
    balance = 0
    menu = {}
    price = {}
    menu_num = 0
    is_item_out = False

    def __init__(self):
        print("#### 클래스 %s 자판기 입니다. ####" %self.product)

        # 동전입력 함수 호출
        self.coin_count()

        # 메뉴, 가격 출력
        string = ""
        for key, value in self.menu.items():
            string += key + ": " + value + " (" + str(self.price.get(key)) +"원)"
            if int(key) < len(self.menu):
                string += " / "
        print(string)

        # 선택된 메뉴 번호 저장
        self.menu_num = self.menu_select()
        self.balance_check()

        if self.is_item_out == True :
            print("### 판매 인스턴스가 종료되었습니다 ###")

    # 동전입력 출력, 잔액 유지 함수
    def coin_count(self):
        try:
            inserted_coin = int(input("동전을 넣어주세요. : "))
            self.balance += inserted_coin
            print("### 현재 잔액 : " + str(self.balance) + "원 ###")
        except:
            print("### 잘못된 값을 입력하셨습니다. 다시 입력해 주세요 ###")
            self.coin_count()

    # 메뉴선택 출력 함수 // 선택된 메뉴 번호 리턴
    def menu_select(self):
        try:
            selected_menu = int(input("원하시는 상품 번호를 선택하세요 : "))
            if str(selected_menu) in self.menu.keys():
                return selected_menu
            else:
                print("### 잘못된 값을 입력하셨습니다. 다시 입력해 주세요 ###")
                self.menu_select()
        except:
            print("### 잘못된 값을 입력하셨습니다. 다시 입력해 주세요 ###")
            self.menu_select()

    # 잔액 확인 함수
    def balance_check(self):
        if self.balance > int(self.price.get(str(self.menu_num))):
            print("### %s을(를) 추출 중이오니 잠시만 기다려주세요 ###" %self.menu.get(str(self.menu_num)))
            print("### 잔액 : %d원 ###" %(self.balance - self.price.get(str(self.menu_num))))
            print("### 잔액을 반환합니다 ###")
            self.balance = 0
            self.is_item_out = True

        elif self.balance == int(self.price.get(str(self.menu_num))):
            print("### %s을(를) 추출 중이오니 잠시만 기다려주세요 ###" %self.menu.get(str(self.menu_num)))
            print("### %s이(가) 완성되었습니다 ###" %self.menu.get(str(self.menu_num)))
            self.balance -= int(self.price.get(str(self.menu_num)))
            self.is_item_out = True

        else:
            while self.balance < int(self.price.get(str(self.menu_num))):
                print("### 잔액이 모자랍니다 ###")
                self.coin_count()
            self.balance_check()



class VM_Coffee(VendingMachine):
    product = "커피"
    menu = {"1" : "설탕커피", "2" : "프림커피", "3" : "원두커피"}
    price = {"1" : 200 , "2" : 300, "3" : 400}
    menu_num = 0
    is_item_out = False

    def __init__(self):
        super().__init__()




print("1: 커피 / 2: 과자")
vm_selected = int(input("구동할 자판기를 선택하세요. : "))

if vm_selected == 1:
    vm = VM_Coffee()

elif vm_selected == 2:
    vm = None
    
else:
    print("#### 자판기가 선택되지 않았습니다.")
