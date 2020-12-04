#include <bits/stdc++.h>
#define ll long long int
using namespace std;

//Structure for a linked list node.
struct node
{
    int data;
    struct node *next;
    node(int x)
    {
        data=x;
        next=NULL;
    }
};

//Function to input a linked list of size n.
node* input(node *head, int n)
{
    int x,i;
    cin>>x;
    node *tail;
    head= new node(x);
    tail=head;
    for(i=1;i<n;i++)
    {
        cin>>x;
        tail->next = new node (x);
        tail=tail->next;
    }
    cout<<"Input Successful"<<endl;
    return head;
}

//Function to print the elements of linked list.
void print(node *head)
{
    while(head!=NULL)
    {
        cout<<head->data<<" ";
        head=head->next;
    }
    cout<<endl;
}

//Function to reverse a linked list.
node* reverse(node *head)
{
    node *prev=NULL, *cur=head, *next=NULL;
    while(cur!=NULL)
    {
        next=cur->next;
        cur->next=prev;
        prev=cur;
        cur=next;
    }
    head=prev;
    return head;
}

//Function to add 2 numbers represented as linked list.
void add(node *h1, node *h2, int m, int n)
{
    node *head1,*head2, *final, *temp;
    h1=reverse(h1); h2=reverse(h2);
    if(m>n) { head1=h1; head2=h2; }
    else { head1=h2; head2=h1; }
    final=head1;

    int c=0,sum=0;
    while(head1!=NULL && head2!=NULL)
    {
        sum = head1->data + head2->data + c;
        head1->data = (sum%10);
        c = sum/10;
        //cout<<head1->data<<" ";
        head1=head1->next;
        head2=head2->next;
    }
    while(head1!=NULL)
    {
        sum=head1->data + c;
        c=sum/10;
        head1->data = sum%10;
        //cout<<head1->data<<" ";
        temp=head1;
        head1=head1->next;
    }
    if(c)
        temp->next = new node(c);

    final = reverse(final);
    print(final);
}


//Function to create a loop in a linked list at kth position.
node* create_loop(node *head, int k)
{
    int c=0;
    node *h;
    h=head;
    while(c<k)
    {
        head=head->next;
        c++;
    }
    node *temp = head;
    while(head->next!=NULL)
        head=head->next;
    head->next=temp;
    cout<<"Loop Created At "<<k<<"th Position"<<endl;
    return h;
}


//Function to detect loop in a linked list and find the starting node.
string detect_loop_find_starting_node(node *head)
{
    node *fast_ptr=head, *slow_ptr=head, *h=head;

    while(slow_ptr->next!=NULL && fast_ptr->next!=NULL && fast_ptr->next->next!=NULL)
    {
        fast_ptr=fast_ptr->next->next;
        slow_ptr=slow_ptr->next;
        if(fast_ptr==slow_ptr)
        {
            int loop_elements=1;
            slow_ptr=slow_ptr->next;
            while(fast_ptr!=slow_ptr)
            {
                slow_ptr=slow_ptr->next;
                loop_elements++;
            }
            // Set both pointers to head, move loop_elements times next to one of the pointer.
            slow_ptr=h;
            fast_ptr=h;
            while(loop_elements--)
                fast_ptr=fast_ptr->next;
            while(slow_ptr!=fast_ptr)
            {
                slow_ptr=slow_ptr->next;
                fast_ptr=fast_ptr->next;
            }
            cout<<"Loop Detected! \nStarting Node = "<<slow_ptr->data;
            return("");
        }
    }
    return("Loop Not Detected!");
}




int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
    #endif

    int i,n,x,k,m;

    struct node *head1=NULL, *tail1=NULL, *head2=NULL, *tail2=NULL;


    cin>>m;
    head1 = input(head1,m);
    cin>>n;
    head2 = input(head2,n);

    return 0;
}